import client from "../../client";
import Link from "next/link";
import groq from "groq";
import { Layout } from "../../components/layout";
import { urlFor } from "../../functions/urlFor";
import { format } from "date-fns";
import { sv } from "date-fns/locale";
import { getDateString } from "../../functions/getDateString";

const Event = (props) => {
  const startTime = new Date(props.sanity.content.startTime);
  const endTime = new Date(props.sanity.content.endTime);
  const dateString = getDateString(startTime, endTime);

  return (
    <Layout footer={props.sanity.footer} isWhitePage>
      <div className="background-color">
        <div className="slug">
          <div className="slug__link">
            <Link href={`/events`}>
              <a>
                <img src="/link-arrow-left.png"></img>Tillbaka
              </a>
            </Link>
          </div>
          {props.sanity.content.image && (
            <img src={urlFor(props.sanity.content.image)}></img>
          )}
          <h2>{props.sanity.content.title}</h2>
          <div className="slug__text">
            <div>
              <div className="slug__line"></div>
              <p>
                <strong>{dateString}</strong> |{" "}
                {format(startTime, "p", { locale: sv })} -{" "}
                {format(endTime, "p", { locale: sv })}
              </p>
              <p className="slug__price-desktop">
                <strong>Pris: </strong>
                {props.sanity.content.price}
              </p>
            </div>
            <div>
              <p>{props.sanity.content.description}</p>
            </div>
            <p className="slug__price-mobile">
              <strong>Pris: </strong>
              {props.sanity.content.price}
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .background-color {
          background-color: var(--color-light-grey);
        }

        .slug {
          padding-top: 80px;
        }

        .slug > img {
          height: 200px;
          width: 100%;
          object-fit: cover;
          object-postion: cover;
        }
        .slug__text {
          padding: 0 var(--padding-x) var(--padding-y) var(--padding-x);
        }

        h2 {
          padding: 0 var(--padding-x);
          margin-top: 20px;
        }

        .slug__price-desktop {
          display: none;
        }

        .slug__line {
          border: 2px solid var(--color-sunny);
          border-radius: 25px;
          width: 71px;
          margin: 10px 0;
        }

        .slug__link {
          padding: var(--padding-y) var(--padding-x);
        }

        .slug__link img {
          width: 25px;
          margin-right: 5px;
        }
        @media (min-width: 768px) {
          .slug {
            padding-top: 200px;
            max-width: var(--max-width);
            margin: 0 auto;
          }
          .slug > img {
            height: 360px;
          }

          .slug__text {
            display: flex;
            width: 100%;
            justify-content: space-between;
            padding: var(--padding-y) 0;
          }
          h2,
          .slug__link {
            padding: var(--padding-y) 0;
          }
          .slug__text div:last-of-type {
            width: 633px;
          }

          .slug__line {
            display: none;
          }

          .slug__price-desktop {
            display: block;
          }

          .slug__price-mobile {
            display: none;
          }
        }
      `}</style>
    </Layout>
  );
};

Event.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query;
  const query = groq`{ 'content': *[_type == "event" && slug.current == $slug][0], 'footer': *[_type == "footer"][0]}`;
  const sanity = await client.fetch(query, { slug });

  return {
    sanity,
  };
};
export default Event;
