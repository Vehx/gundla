import client from "../client";
import groq from "groq";
import { Layout } from "../components/layout";
import { Event } from "../components/event";
import { EventHero } from "../components/eventHero";
import { localDateConvert } from "../functions/localDateConvert";
import { localTimeConvert } from "../functions/localTimeConvert";
import { capitalizeFirstLetter } from "../functions/capitalizeFirstLetter";

const Events = (props) => {
  const eventsArray = [];
  for (const event in props.sanity.content) {
    eventsArray.push(props.sanity.content[event]);
  }

  const eventsComponent = [];
  for (let i = 1; i < eventsArray.length; i++) {
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
  const eventsHeroComponents = [];
  for (let i = 0; i < 3; i++) {
    eventsHeroComponents.push(
      <EventHero
        key={i}
        image={props.sanity.content[i].image}
        alt={props.sanity.content[i].alt}
        title={props.sanity.content[i].title}
        startTime={props.sanity.content[i].startTime}
        endTime={props.sanity.content[i].endTime}
        shortDescription={props.sanity.content[i].shortDescription}
        slug={props.sanity.content[i].slug}
        isOnHomePage={false}
      />
    );
  }

  return (
    <Layout footer={props.sanity.footer} isWhitePage>
      <div className="background-color">
        <div className="events">
          <h2 className="events__heading">Kalendarium</h2>
          <div className="events__hero-container">{eventsHeroComponents}</div>
          <div className="events__container">
            <h2 className="events__container-heading">Fler Evenemang</h2>
            {eventsComponent}
          </div>
        </div>
        <style jsx>{`
          .background-color {
            background-color: var(--color-light-grey);
          }

          .events__heading {
            padding: 90px 0 20px var(--padding-x);
          }

          .events {
            display: flex;
            flex-direction: column;
          }

          .events__hero-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }

          .events__container {
            padding: var(--padding-y) var(--padding-x);
          }

          .events__container-heading {
            padding-bottom: 20px;
          }

          @media (min-width: 768px) {
            .events {
              max-width: var(--max-width);
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin: 0 auto;
              padding-top: 20px;
            }

            .events__hero-container {
              flex-direction: row;
              justify-content: space-between;
              align-items: start;
            }

            .events__container {
              max-width: 552px;
              padding: 20px 0;
            }

            .events__container-heading {
              text-align: center;
              padding-bottom: 60px;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
};

Events.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query;
  const query = groq`{ 'content': *[_type == "event"]|order(startTime), 'footer': *[_type == "footer"][0]}`;
  const sanity = await client.fetch(query, { slug });

  return {
    sanity,
  };
};

export default Events;
