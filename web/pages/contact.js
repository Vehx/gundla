import client from "../client";
import { Layout } from "../components/layout";
import groq from "groq";
import { ContactForm } from "../components/contactForm";
import { HeroSmall } from "../components/heroSmall";
import { urlFor } from "../functions/urlFor";
import BlockContent from "@sanity/block-content-to-react";

const Contact = (props) => {
  return (
    <Layout footer={props.sanity.footer}>
      <HeroSmall
        src={urlFor(props.sanity.content.heroImage.image)}
        alt={props.sanity.content.heroImage.alt}
      />
      <div className="contact">
        <div>
          <h2>{props.sanity.content.heading}</h2>
          <BlockContent blocks={props.sanity.content.blockSectionOne} />
          <div>
            <p>
              <strong>{props.sanity.content.contactInfo.adress}</strong>
            </p>
            <p>
              {props.sanity.content.contactInfo.zipCode}{" "}
              {props.sanity.content.contactInfo.city}
            </p>
            <p>Tel. {props.sanity.content.contactInfo.telephone}</p>
            <p>Email: {props.sanity.content.contactInfo.email}</p>
          </div>
          <BlockContent blocks={props.sanity.content.blockSectionTwo} />
        </div>
        <ContactForm />
      </div>
      <style jsx>{`
        .contact {
          display: flex;
          flex-direction: column;
          width: 100%;
          background-color: var(--color-light-grey);
          align-items: center;
          padding: var(--padding-y) var(--padding-x);
        }
        .contact > div {
          max-width: 512px;
        }
        h2 {
          margin-top: 20px;
          padding-bottom: var(--padding-y);
        }
        p {
          margin-bottom: 0px;
        }
        .contact > div > div {
          margin: 20px 0;
        }
        @media (min-width: 768px) {
          h2,
          .contact > div > div {
            text-align: center;
          }
        }
      `}</style>
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
