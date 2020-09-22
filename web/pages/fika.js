import client from "../client";
import groq from "groq";
import { Layout } from "../components/layout";
import BlockContent from "@sanity/block-content-to-react";
import { HeroSmall } from "../components/heroSmall";
import { urlFor } from "../functions/urlFor";
import { MosaicImage } from "../components/mosaicImage";

const Fika = (props) => {
  const images = props.sanity.content.mosaic.image;
  const mosaicComponents = images.map((item) => (
    <MosaicImage key={item._key} src={urlFor(item.image)} alt={item.alt} />
  ));

  return (
    <Layout footer={props.sanity.footer}>
      <HeroSmall
        src={urlFor(props.sanity.content.heroSmall.image)}
        alt={props.sanity.content.heroSmall.alt}
      />
      <div className="fika">
        <div className="fika__text">
          <h2>{props.sanity.content.heading}</h2>
          <BlockContent blocks={props.sanity.content.blockSection} />
        </div>
        <div className="mosaic">{mosaicComponents}</div>
      </div>
      <style jsx>{`
        .fika {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: var(--color-light-grey);
        }
        .fika__text {
          width: 100%;
          padding: var(--padding-y) var(--padding-x);
        }

        .mosaic {
          display: flex;
          width: 100%;
          height: 250px;
          flex-wrap: wrap;
        }

        .mosaic img {
          width: 100%;
          height: 274px;
          object-fit: cover;
          object-position: cover;
          display: none;
        }
        h2 {
          margin-top: 20px;
          padding-bottom: var(--padding-y);
          text-align: left;
        }
        p {
          margin-bottom: 0px;
        }
        .fika > div > div {
          margin: 20px 0;
        }
        @media (min-width: 768px) {
          h2 {
            text-align: center;
            margin-bottom: 40px;
          }

          .fika__text {
            max-width: 552px;
            padding: 20px 0;
          }

          .mosaic {
            max-width: 1041px;
            height: 496px;
            margin: 40px 0;
          }

          img {
            width: 100%;
            max-width: 1042px;
            padding: 0;
            height: 667px;
          }
        }
      `}</style>
    </Layout>
  );
};

Fika.getInitialProps = async function (context) {
  // Fetching data from sanity
  const { slug = "" } = context.query;
  const query = groq`{'content': *[_type == "fika"][0], 'footer': *[_type == "footer"][0]}`;
  const sanity = await client.fetch(query, { slug });

  return {
    sanity,
  };
};

export default Fika;
