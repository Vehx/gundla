import client from "../client";
import groq from "groq";
import { Layout } from "../components/layout";
import BlockContent from "@sanity/block-content-to-react";
import { HeroSmall } from "../components/heroSmall";
import { urlFor } from "../functions/urlFor";

const Fika = (props) => {
  const mosaicComponent = (images) =>
    images.map((item) => (
      <img
        key={item._key}
        src={urlFor(item.image)}
        alt={item.alt}
        className="image"
      />
    ));

  const serializers = {
    types: {
      mosaic: (props) => (
        <div className="mosaic">{mosaicComponent(props.node.image)}</div>
      ),
    },
  };

  return (
    <Layout footer={props.sanity.footer}>
      <HeroSmall
        src={urlFor(props.sanity.content.heroSmall.image)}
        alt={props.sanity.content.heroSmall.alt}
      />
      <BlockContent
        blocks={props.sanity.content.blockSectionOne}
        serializers={serializers}
      />
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
