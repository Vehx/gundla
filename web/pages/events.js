import client from "../client";
import groq from "groq";
import moment from "moment";
import Layout from "../components/layout";
import Event from "../components/event";

const Events = (props) => {
  const {
    title = "Missing title",
    startTime = "Missing start time",
    endTime = "Missing end time",
    slug = "Missing slug",
    shortDescription = "Missing short description",
    description = "Missing description",
  } = props;

  const localTimeConvert = (timeStamp) => {
    timeStamp = moment(timeStamp).toDate();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return timeStamp.toLocaleDateString("sv", options);
  };

  // var date = new Date(Date.UTC(2020, 11, 20, 3, 0, 0));
  // console.log(date);
  // console.log(startTime);
  // var options = {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // };
  // console.log(date.toLocaleDateString("sv", options));

  // console.log(moment(startTime).toDate());
  // console.log(startTime);
  const localStartTime = localTimeConvert(startTime);
  const localEndTime = localTimeConvert(endTime);

  // console.log(localStartTime);
  console.log(props);
  return (
    <div>
      <h1>Detta är eventssidan i plural</h1>
      <p>{title}</p>
      <p>{localStartTime}</p>
      <p>{startTime}</p>
      <Event
        title={title}
        excerpt={shortDescription}
        startTime={localStartTime}
        endTime={localEndTime}
        slug={`event/${slug.current}`}
      />
    </div>
  );
};

Events.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query;
  const query = groq`*[_type == "event"][0]|order(date)`;
  return await client.fetch(query, { slug });
};

export default Events;
