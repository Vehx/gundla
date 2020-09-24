import client from "../client";
import groq from "groq";
import { Layout } from "../components/layout";
import BlockContent from "@sanity/block-content-to-react";
import { Map } from "../components/map";
import { urlFor } from "../functions/urlFor";
import { HeroSmall } from "../components/heroSmall";

const Visit = (props) => {
  console.log(props);
  return (
    <Layout footer={props.sanity.footer}>
      <HeroSmall
        src={urlFor(props.sanity.content.heroImage.image)}
        alt={props.sanity.content.heroImage.alt}
      />
      <div className="visit">
        <div className="visit__container">
          <div className="visit__text">
            <h2>{props.sanity.content.heading}</h2>
            <div className="visit__adress">
              <p>
                <strong>{props.sanity.content.adress}</strong>
              </p>
              <p>
                {props.sanity.content.zipCode} {props.sanity.content.city}
              </p>
              <div className="visit__punctuation-line"></div>
            </div>
            <div className="visit__block-one">
              <BlockContent blocks={props.sanity.content.blockSectionOne} />
            </div>
            <a href={props.sanity.content.url}>
              <p>
                {props.sanity.content.urlText}

                <img src="./link-arrow.png" alt="pil" loading="lazy" />
              </p>
            </a>
            <div className="visit__block-two">
              <BlockContent blocks={props.sanity.content.blockSectionTwo} />
            </div>
            <img
              className="visit__sunflower"
              src="./solros.png"
              alt="solros"
              loading="lazy"
            />
          </div>
        </div>
        <div className="visit__map">
          <Map />
        </div>
      </div>
      <style jsx>{`
        .visit {
          width: 100%;
          height: 100%;
          background-color: var(--color-light-grey);
        }

        .visit-container {
          display: flex;
          flex-direction: column;
          width: 100%;
          align-items: left;
        }

        .visit__text {
          position: relative;
          padding: var(--padding-y) var(--padding-x);
        }

        .visit__sunflower {
          position: absolute;
          width: 140px;
          right: 0;
          top: 300px;
        }

        .visit__block-one {
          margin: 15px 0 30px 0;
        }

        .visit__text a img {
          width: 24px;
          margin-left: 10px;
        }

        .visit__text a p {
          font-weight: bold;
          margin: 15px 0;
        }

        .visit__adress p:first-of-type {
          margin-bottom: 0;
        }

        .visit__block-two {
          margin: 30px 0;
        }

        h2 {
          margin-bottom: 10px;
        }

        .visit__punctuation-line {
          width: 71px;
          border: 2px solid var(--color-sunny);
          border-radius: 25px;
          margin-bottom: 15px;
        }

        .visit__map {
          width: 100%;
          height: 280px;
        }

        @media (min-width: 768px) {
          .visit__container {
            max-width: 552px;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin: 0 auto;
          }
          .visit__text {
            padding: 0;
          }
          h2 {
            padding: 60px 0 40px 0;
            text-align: center;
          }
          .visit__adress {
            text-align: center;
          }
          .visit__punctuation-line {
            display: none;
          }
          .visit__sunflower {
            display: none;
          }
          .visit__map {
            width: 100vw;
            height: 546px;
          }
        }
      `}</style>
    </Layout>
  );
};

Visit.getInitialProps = async function (context) {
  // Fetching data from sanity
  const { slug = "" } = context.query;
  const query = groq`{'content': *[_type == "visitUs"][0], 'footer': *[_type == "footer"][0]}`;
  const sanity = await client.fetch(query, { slug });

  return {
    sanity,
  };
};

export default Visit;
