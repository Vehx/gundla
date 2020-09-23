import client from "../client";
import groq from "groq";
import { Layout } from "../components/layout";
import { EventHero } from "../components/eventHero";
import { InstagramImage } from "../components/insatagramImage";
import { urlFor } from "../functions/urlFor";
import { MainHero } from "../components/mainHero";
import { InstagramGrid } from "../components/instagramGrid";
import { TextBlockWithLink } from "../components/textBlockWithLink";
import { FullScreenImage } from "../components/fullScreenImage";

const Index = (props) => {
  const instagramImages = props.pictures.map((picture) => (
    <InstagramImage
      key={picture.node.id}
      src={picture.node}
      alt={picture.node.accessibility_caption}
    />
  ));

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
        slug={props.sanity.event[i].slug}
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
      <div className="background-color">
        <div className="container">
          <TextBlockWithLink
            title={props.sanity.content.textBlockWithLink.title}
            paragraph={props.sanity.content.textBlockWithLink.paragraph}
            url={props.sanity.content.textBlockWithLink.url}
            urlText={props.sanity.content.textBlockWithLink.urlText}
          />
          <FullScreenImage
            src={urlFor(props.sanity.content.imageBlock.image)}
            alt={props.sanity.content.imageBlock.alt}
          />
          <TextBlockWithLink
            title={props.sanity.content.textBlockWithLinkTwo.title}
            paragraph={props.sanity.content.textBlockWithLinkTwo.paragraph}
            url={props.sanity.content.textBlockWithLinkTwo.url}
            urlText={props.sanity.content.textBlockWithLinkTwo.urlText}
          />
          <div className="event-hero-container">{eventHeroComponents}</div>

          <InstagramGrid href="https://www.instagram.com/gundlagardscafe">
            {instagramImages}
          </InstagramGrid>
        </div>
      </div>
      <style jsx>{`
        .background-color {
          background-color: var(--color-light-grey);
        }

        .event-hero-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        @media (min-width: 768px) {
          .event-hero-container {
            flex-direction: row;
            justify-content: space-between;
            align-items: start;
          }
        }
      `}</style>
    </Layout>
  );
};

Index.getInitialProps = async function (context) {
  // Fetching data from sanity
  const { slug = "" } = context.query;
  const query = groq`{ 'event':*[_type == "event"]|order(startTime)[0..2],'content': *[_type == "home"][0], 'footer': *[_type == "footer"][0]}`;
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
