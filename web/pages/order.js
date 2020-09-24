import client from "../client";
import groq from "groq";
import { Layout } from "../components/layout";
import { ContactForm } from "../components/contactForm";
import BlockContent from "@sanity/block-content-to-react";
import { HeroSmall } from "../components/heroSmall";
import { FullScreenImage } from "../components/fullScreenImage";
import { TextBlockWithLink } from "../components/textBlockWithLink";
import { urlFor } from "../functions/urlFor";

const Order = (props) => {
  return (
    <Layout footer={props.sanity.footer}>
      <HeroSmall
        src={urlFor(props.sanity.content.heroSmall.image)}
        alt={props.sanity.content.heroSmall.alt}
      />
      <div className="order">
        <TextBlockWithLink
          title={props.sanity.content.textBlockWithLink.title}
          paragraph={props.sanity.content.textBlockWithLink.paragraph}
          url={props.sanity.content.textBlockWithLink.url}
          urlText={props.sanity.content.textBlockWithLink.urlText}
        />
        <img
          lazyloading="true"
          src={urlFor(props.sanity.content.imageBlock.image)}
          alt={props.sanity.content.imageBlock.alt}
        />

        <div className="order__text">
          <h2>{props.sanity.content.heading}</h2>
          <BlockContent blocks={props.sanity.content.blockSectionOne} />
          <ContactForm />
        </div>
      </div>
      <style jsx>{`
        .order {
          display: flex;
          flex-direction: column;
          width: 100%;
          background-color: var(--color-light-grey);
          align-items: center;
        }
        .order__text {
          padding: var(--padding-y) var(--padding-x) 40px var(--padding-x);
        }
        .order > div {
          max-width: 512px;
        }
        img {
          width: 100%;
          height: 274px;
          object-fit: cover;
          object-position: cover;
        }
        h2 {
          margin-top: 20px;
          padding-bottom: var(--padding-y);
        }
        p {
          margin-bottom: 0px;
        }
        .order > div > div {
          margin: 20px 0;
        }
        @media (min-width: 768px) {
          h2,
          .order > div > div {
            text-align: center;
          }

          .order__text {
            margin-bottom: 50px;
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

Order.getInitialProps = async function (context) {
  // Fetching data from sanity
  const { slug = "" } = context.query;
  const query = groq`{'content': *[_type == "order"][0], 'footer': *[_type == "footer"][0]}`;
  const sanity = await client.fetch(query, { slug });

  return {
    sanity,
  };
};

export default Order;
