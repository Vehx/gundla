import client from "../../client"
import Link from "next/link";
import {Layout} from "../../components/layout"
import { urlFor } from "../../functions/urlFor";
import { localDateConvert } from "../../functions/localDateConvert";
import { format } from "date-fns";
import { sv } from "date-fns/locale";

 const Event = (props) => {
    const startTime = new Date(props.startTime);
    const endTime = new Date(props.endTime);
    let startTimeFormatString = "d LLLL";
    let endTimeFormatString = "d LLLL";
    let sameDay = false;
    if (startTime.getDate() === endTime.getDate()){
      endTimeFormatString = "LLLL";
      sameDay = true;
    }
    if (startTime.getMonth() === endTime.getMonth()){
      startTimeFormatString = "d";
    }

    const startTimeString = localDateConvert(props.startTime, startTimeFormatString);
    const endTimeString = localDateConvert(props.endTime, endTimeFormatString);

  return (
    <Layout>
       <Link href={`/events`}>
        <a>Tillbaka</a>
        </Link>
      {props.image && <img src={urlFor(props.image)}></img>}
      <h1>{props.title}</h1>
      <p>{startTimeString} {!sameDay && "- "}{endTimeString} | {format(startTime, "p", { locale: sv })} - {format(endTime, "p", { locale: sv })}</p>

      <p>{props.description}</p>
      <p>Pris: {props.price}</p>
    </Layout>
  );
};

Event.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query;
  return await client.fetch(
    `
    *[_type == "event" && slug.current == $slug][0]
  `,
    { slug }
  );
};
export default Event;
