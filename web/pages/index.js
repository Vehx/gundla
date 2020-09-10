import client from "../client";
import groq from "groq";
import { Layout } from "../components/layout";
import { EventHero } from "../components/eventHero";
import { InstagramImage } from "../components/insatagramImage";

const Index = (props) => {
  const instagramImages = props.pictures.map((picture) => (
    <InstagramImage
      key={picture.node.id}
      src={picture.node}
      alt={picture.node.accessibility_caption}
    />
  ));

  return (
    <Layout>
      <EventHero
        image={props.sanity.image}
        title={props.sanity.title}
        startTime={props.sanity.startTime}
        endTime={props.sanity.endTime}
        shortDescription={props.sanity.shortDescription}
      />
      <a href="https://www.instagram.com/gundlagardscafe">{instagramImages}</a>
    </Layout>
  );
};

Index.getInitialProps = async function (context) {
  const { slug = "" } = context.query;
  const query = groq`*[_type == "event"][0]`;
  const sanity = await client.fetch(query, { slug });

  const baseUrl = "https://www.instagram.com";
  const profileName = "gundlagardscafe";
  const profileUrl = `${baseUrl}/${profileName}`;
  const jsonDataUrl = `${profileUrl}/?__a=1`;
  const response = await fetch(jsonDataUrl);
  const jsonData = await response.json();
  const pictures = jsonData.graphql.user.edge_owner_to_timeline_media.edges;

  return {
    sanity,
    pictures,
  };
};

export default Index;
