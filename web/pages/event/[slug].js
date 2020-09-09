import client from "../../client";
import Link from "next/link";
import groq from "groq";
import { Layout } from "../../components/layout";
import { urlFor } from "../../functions/urlFor";
import { format } from "date-fns";
import { sv } from "date-fns/locale";
import { getDateString } from "../../functions/getDateString";

const Event = (props) => {
  const startTime = new Date(props.startTime);
  const endTime = new Date(props.endTime);
  const dateString = getDateString(startTime, endTime);

  return (
    <Layout>
      <Link href={`/events`}>
        <a>Tillbaka</a>
      </Link>
      {props.image && <img src={urlFor(props.image)}></img>}
      <h1>{props.title}</h1>
      <p>
        {dateString} | {format(startTime, "p", { locale: sv })} -{" "}
        {format(endTime, "p", { locale: sv })}
      </p>

      <p>{props.description}</p>
      <p>Pris: {props.price}</p>
    </Layout>
  );
};

Event.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query;
  const query = groq`*[_type == "event" && slug.current == $slug][0]`;
  return await client.fetch(query, { slug });
};
export default Event;
