import client from "../client";
import { Layout } from "../components/layout";
import groq from "groq";
import { ContactForm } from "../components/contactForm";
import BlockContent from "@sanity/block-content-to-react";

const Contact = (props) => {
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
    <Layout footer={props.sanity.footer.blockSectionOne}>
      <BlockContent
        blocks={props.sanity.content.blockSectionOne}
        serializers={serializers}
      />
      <ContactForm />
    </Layout>
  );
};

Contact.getInitialProps = async function (context) {
  // Fetching data from sanity
  const { slug = "" } = context.query;
  const query = groq`{'content': *[_type == "contact"][0], 'footer': *[_type == "footer"][0]}`;
  const sanity = await client.fetch(query, { slug });

  return {
    sanity,
  };
};

export default Contact;
