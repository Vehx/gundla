import client from "../client";
import groq from "groq";
import { Layout } from "../components/layout";
import { HeroSmall } from "../components/heroSmall";
import { urlFor } from "../functions/urlFor";
import { HappeningsSingle } from "../components/happeningsSingle";

const Happenings = (props) => {
  console.log(props);

  return (
    <Layout footer={props.sanity.footer}>
      <HeroSmall
        src={urlFor(props.sanity.content.heroSmall.image)}
        alt={props.sanity.content.heroSmall.alt}
      />
      <div className="background-color">
        <div className="happenings">
          <h2>Händer på Gundla</h2>
          <HappeningsSingle
            title={props.sanity.content.textBlockWithLinkOne.title}
            paragraph={props.sanity.content.textBlockWithLinkOne.paragraph}
            urlText={props.sanity.content.textBlockWithLinkOne.urlText}
            url={props.sanity.content.textBlockWithLinkOne.url}
          />
          <HappeningsSingle
            title={props.sanity.content.textBlockWithLinkTwo.title}
            paragraph={props.sanity.content.textBlockWithLinkTwo.paragraph}
            urlText={props.sanity.content.textBlockWithLinkTwo.urlText}
            url={props.sanity.content.textBlockWithLinkTwo.url}
          />
          <HappeningsSingle
            title={props.sanity.content.textBlockWithLinkThree.title}
            paragraph={props.sanity.content.textBlockWithLinkThree.paragraph}
            urlText={props.sanity.content.textBlockWithLinkThree.urlText}
            url={props.sanity.content.textBlockWithLinkThree.url}
          />
          <HappeningsSingle
            title={props.sanity.content.textBlockWithLinkFour.title}
            paragraph={props.sanity.content.textBlockWithLinkFour.paragraph}
            urlText={props.sanity.content.textBlockWithLinkFour.urlText}
            url={props.sanity.content.textBlockWithLinkFour.url}
          />
          <HappeningsSingle
            title={props.sanity.content.textBlockWithLinkFive.title}
            paragraph={props.sanity.content.textBlockWithLinkFive.paragraph}
            urlText={props.sanity.content.textBlockWithLinkFive.urlText}
            url={props.sanity.content.textBlockWithLinkFive.url}
          />
        </div>
      </div>
      <style jsx>{`
        .background-color {
          background-color: var(--color-light-grey);
        }
        .happenings {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: var(--padding-y) var(--padding-x);
        }

        h2 {
          text-align: left;
          width: 100%;
          margin-top: 40px;
        }

        @media (min-width: 768px) {
          .happenings {
            margin: 0 auto;
            max-width: 532px;
            padding: 0 0 30px 0;
          }

          h2 {
            text-align: center;
            margin: 80px 0 40px 0;
          }
        }
      `}</style>
    </Layout>
  );
};

Happenings.getInitialProps = async function (context) {
  // Fetching data from sanity
  const { slug = "" } = context.query;
  const query = groq`{'content': *[_type == "happenings"][0], 'footer': *[_type == "footer"][0]}`;
  const sanity = await client.fetch(query, { slug });

  return {
    sanity,
  };
};

export default Happenings;
