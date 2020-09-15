import client from "../client";
import groq from "groq";
import BlockContent from "@sanity/block-content-to-react";
import { Layout } from "../components/layout";
import { EventHero } from "../components/eventHero";
import { InstagramImage } from "../components/insatagramImage";
import { urlFor } from "../functions/urlFor";
import { MainHero } from "../components/mainHero";

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
      signature: (props) => <p className="signature">{props.node.text}</p>,
      imageBlock: (props) => (
        <img
          src={urlFor(props.node.image)}
          alt={props.node.alt}
          className="image"
        ></img>
      ),
    },
  };

  return (
    <Layout footer={props.sanity.footer}>
      <MainHero
        title={props.sanity.content.hero.heroTitle}
        src={urlFor(props.sanity.content.hero.heroImage)}
        // alt={props.sanity.content.hero.}
        cta={props.sanity.content.hero.heroCta}
      />
      <BlockContent
        blocks={props.sanity.content.blockSectionOne}
        serializers={serializers}
      />
      <BlockContent
        blocks={props.sanity.content.blockSectionTwo}
        serializers={serializers}
      />
      <EventHero
        image={props.sanity.event.image}
        title={props.sanity.event.title}
        startTime={props.sanity.event.startTime}
        endTime={props.sanity.event.endTime}
        shortDescription={props.sanity.event.shortDescription}
      />

      <a href="https://www.instagram.com/gundlagardscafe">{instagramImages}</a>
    </Layout>
  );
};

Index.getInitialProps = async function (context) {
  // Fetching data from sanity
  const { slug = "" } = context.query;
  const query = groq`{ 'event':*[_type == "event"][0],'content': *[_type == "home"][0], 'footer': *[_type == "footer"][0]}`;
  const sanity = await client.fetch(query, { slug });

  // Fetching data from instagram
  const baseUrl = "https://www.instagram.com";
  const profileName = "gundlagardscafe";
  const profileUrl = `${baseUrl}/${profileName}`;
  const jsonDataUrl = `${profileUrl}/?__a=1`;
  const response = await fetch(jsonDataUrl);
  const jsonData = await response.json();
  const allPictures = jsonData.graphql.user.edge_owner_to_timeline_media.edges;
  const pictures = [];

  for (let i = 0; i < 4; i++) {
    const element = allPictures[i];
    pictures.push(element);
  }

  return {
    sanity,
    pictures,
  };
};

export default Index;
