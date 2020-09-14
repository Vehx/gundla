import client from "../client";
import groq from "groq";
import { Layout } from "../components/layout";
import BlockContent from "@sanity/block-content-to-react";
import { Map } from "../components/map";

const Visit = (props) => {
  return (
    <Layout footer={props.sanity.footer.blockSectionOne}>
      <BlockContent blocks={props.sanity.content.blockSectionOne} />
      <Map />
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
