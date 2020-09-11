import client from "../client";
import groq from "groq";
import BlockContent from "@sanity/block-content-to-react";
import { Layout } from "../components/layout";
import { EventHero } from "../components/eventHero";
import { InstagramImage } from "../components/insatagramImage";
import { urlFor } from "../functions/urlFor";

const Index = (props) => {
  console.log(props);
  const instagramImages = props.pictures.map((picture) => (
    <InstagramImage
      key={picture.node.id}
      src={picture.node}
      alt={picture.node.accessibility_caption}
    />
  ));

  const serializers = {
    types: {
      signature: (props) => <p className="signature">{props.node.title}</p>,
    },
  };

  //   const serializers = {
  //   types: {
  //     code: props => (
  //       <pre data-language={props.node.language}>
  //         <code>{props.node.code}</code>
  //       </pre>
  //     )
  //   }
  // }

  return (
    <Layout>
      <EventHero
        image={props.sanity.event.image}
        title={props.sanity.event.title}
        startTime={props.sanity.event.startTime}
        endTime={props.sanity.event.endTime}
        shortDescription={props.sanity.event.shortDescription}
      />
      <BlockContent blocks={props.sanity.content.richText} />
      <BlockContent
        blocks={props.sanity.content.test}
        serializers={serializers}
      />
      <a href="https://www.instagram.com/gundlagardscafe">{instagramImages}</a>
    </Layout>
  );
};

Index.getInitialProps = async function (context) {
  // Fetching data from sanity
  const { slug = "" } = context.query;
  const query = groq`{ 'event':*[_type == "event"][0],'content': *[_type == "home"][0]}`;
  const sanity = await client.fetch(query, { slug });

  // Fetching data from instagram
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
