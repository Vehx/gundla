import client from "../client";
import groq from "groq";
import { Layout } from "../components/layout";
import { HeroSmall } from "../components/heroSmall";
import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from "../functions/urlFor";

const About = (props) => {
  console.log(props);
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
      contactInfo: (props) => (
        <div>
          <p>
            <strong>{props.node.adress}</strong>
          </p>
          <p>
            {props.node.zipCode} {props.node.city}
          </p>
          <p>{props.node.telephone}</p>
          <p>{props.node.email}</p>
        </div>
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
