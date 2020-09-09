import client from "../client";
import groq from "groq";
import { Layout } from "../components/layout";
import { Event } from "../components/event";
import { EventHero } from "../components/eventHero";
import { localDateConvert } from "../functions/localDateConvert";
import { localTimeConvert } from "../functions/localTimeConvert";
import { capitalizeFirstLetter } from "../functions/capitalizeFirstLetter";

const Events = (props) => {
  console.log(props);
  const eventsArray = [];
  for (const event in props) {
    eventsArray.push(props[event]);
  }

  const eventsComponent = [];
  for (let i = 1; i < eventsArray.length - 1; i++) {
    const el = eventsArray[i];

    eventsComponent.push(
      <Event
        key={el._id}
        title={el.title}
        startDate={capitalizeFirstLetter(localDateConvert(el.startTime))}
        endDate={capitalizeFirstLetter(localDateConvert(el.endTime))}
        startTime={localTimeConvert(el.startTime)}
        endTime={localTimeConvert(el.endTime)}
        shortDescription={el.shortDescription}
        slug={el.slug}
      />
    );
  }

  return (
    <Layout>
      <h1>Händer på Gundla</h1>
      <EventHero
        image={eventsArray[0].image}
        title={eventsArray[0].title}
        startTime={capitalizeFirstLetter(
          localDateConvert(eventsArray[0].startTime)
        )}
        endTime={capitalizeFirstLetter(
          localDateConvert(eventsArray[0].endTime)
        )}
        shortDescription={eventsArray[0].shortDescription}
      />
      <h2>Fler Evenemang</h2>
      {eventsComponent}
    </Layout>
  );
};

Events.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query;
  const query = groq`*[_type == "event"]|order(startTime)`;
  return await client.fetch(query, { slug });
};

export default Events;
