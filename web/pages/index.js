import client from "../client";
import groq from "groq";
import BlockContent from "@sanity/block-content-to-react";
import { Layout } from "../components/layout";
import { EventHero } from "../components/eventHero";
import { InstagramImage } from "../components/insatagramImage";
import { urlFor } from "../functions/urlFor";
import { MainHero } from "../components/mainHero";
import { InstagramGrid } from "../components/instagramGrid";

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

  let eventHeroComponents = [];
  for (let i = 0; i < 3; i++) {
    eventHeroComponents.push(
      <EventHero
        key={i}
        image={props.sanity.event[i].image}
        alt={props.sanity.event[i].alt}
        title={props.sanity.event[i].title}
        startTime={props.sanity.event[i].startTime}
        endTime={props.sanity.event[i].endTime}
        shortDescription={props.sanity.event[i].shortDescription}
        isOnHomePage={true}
      />
    );
  }

  return (
    <Layout footer={props.sanity.footer}>
      <MainHero
        title={props.sanity.content.hero.heroTitle}
        sub={props.sanity.content.hero.heroSubTitle}
        src={urlFor(props.sanity.content.hero.heroImage)}
        alt={props.sanity.content.hero.heroAlt}
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
      <div className="event-hero-container">
        {eventHeroComponents}
        <style jsx>{`
          div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          @media (min-width: 768px) {
            div {
              flex-direction: row;
              justify-content: space-between;
              align-items: start;
            }
          }
        `}</style>
      </div>

      <InstagramGrid href="https://www.instagram.com/gundlagardscafe">
        {instagramImages}
      </InstagramGrid>
    </Layout>
  );
};

Index.getInitialProps = async function (context) {
  // Fetching data from sanity
  const { slug = "" } = context.query;
  const query = groq`{ 'event':*[_type == "event"][0..2],'content': *[_type == "home"][0], 'footer': *[_type == "footer"][0]}`;
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
