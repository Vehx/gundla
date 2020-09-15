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
    <Layout footer={props.sanity.footer}>
      <Link href={`/events`}>
        <a>Tillbaka</a>
      </Link>
      {props.sanity.content.image && (
        <img src={urlFor(props.sanity.content.image)}></img>
      )}
      <h1>{props.sanity.content.title}</h1>
      <p>
        {dateString} | {format(startTime, "p", { locale: sv })} -{" "}
        {format(endTime, "p", { locale: sv })}
      </p>

      <p>{props.sanity.content.description}</p>
      <p>Pris: {props.sanity.content.price}</p>
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
