import client from "../client";
import groq from "groq";
import { Layout } from "../components/layout";
import { HeroSmall } from "../components/heroSmall";
import { FullScreenImage } from "../components/fullScreenImage";
import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from "../functions/urlFor";

const About = (props) => {
  return (
    <Layout footer={props.sanity.footer}>
      <HeroSmall
        src={urlFor(props.sanity.content.heroSmall.image)}
        alt={props.sanity.content.heroSmall.alt}
      />
      <div className="background-color">
        <div className="container">
          <h2 className="about__heading">{props.sanity.content.heading}</h2>
          <div>
            <div className="about__text">
              <BlockContent blocks={props.sanity.content.blockSectionOne} />
            </div>
            <div className="about__mobile-image">
              <FullScreenImage
                src={urlFor(props.sanity.content.imageBlock.image)}
                alt={props.sanity.content.imageBlock.alt}
              />
            </div>
            <div className="about__text">
              <BlockContent blocks={props.sanity.content.blockSectionTwo} />
              <p className="signature">{props.sanity.content.signature}</p>
            </div>
            <div className="about__mobile-image">
              <FullScreenImage
                src={urlFor(props.sanity.content.imageBlockTwo.image)}
                alt={props.sanity.content.imageBlockTwo.alt}
              />
            </div>
          </div>
          <div className="about__desktop-image">
            <FullScreenImage
              src={urlFor(props.sanity.content.imageBlock.image)}
              alt={props.sanity.content.imageBlock.alt}
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .background-color {
          background-color: var(--color-light-grey);
        }

        h2 {
          padding-bottom: var(--padding-y);
        }
        .about__text {
          padding: var(--padding-y) var(--padding-x);
        }

        .about__heading {
          padding: var(--padding-y) var(--padding-x);
        }

        .container > div:first-of-type {
          display: flex;
          flex-direction: column;
        }
        .signature {
          font-style: italic;
          text-align: right;
        }
        .about__desktop-image {
          display: none;
        }
        .about__mobile-image {
          display: inline;
        }
        @media (min-width: 768px) {
          h2 {
            text-align: center;
            margin-top: 100px;
          }
          .container > div:first-of-type {
            flex-direction: row;
            justify-content: space-between;
          }

          .signature {
            margin-top: 60px;
          }

          .about__text {
            padding: 50px 0px 60px 0px;
            width: 48%;
          }
          .about__desktop-image {
            display: inline;
            margin-bottom: 60px;
          }
          .about__mobile-image {
            display: none;
          }
        }
      `}</style>
    </Layout>
  );
};

About.getInitialProps = async function (context) {
  // Fetching data from sanity
  const { slug = "" } = context.query;
  const query = groq`{'content': *[_type == "about"][0], 'footer': *[_type == "footer"][0]}`;
  const sanity = await client.fetch(query, { slug });

  return {
    sanity,
  };
};

export default About;
