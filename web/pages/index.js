import client from "../client";
import groq from "groq";
import { Layout } from "../components/layout";
import { EventHero } from "../components/eventHero";

const Index = (props) => {
  const instagramImages = props.pictures.map((picture) => {
    return (
      <img
        key={picture.node.thumbnail_resources[4].src}
        src={picture.node.thumbnail_resources[4].src}
      />
    );
  });

  return (
    <Layout>
      <EventHero
        image={props.sanity.image}
        title={props.sanity.title}
        startTime={props.sanity.startTime}
        endTime={props.sanity.endTime}
        shortDescription={props.sanity.shortDescription}
      />
      {instagramImages}
    </Layout>
  );
};

Index.getInitialProps = async function (context) {

  const { slug = "" } = context.query;
  const query = groq`*[_type == "event"][0]`;
  const sanity = await client.fetch(query, { slug });

  const baseUrl = "https://www.instagram.com";
  const profileName = "yrgo_webbutvecklare";
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
