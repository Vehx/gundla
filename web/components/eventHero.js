import { urlFor } from "../functions/urlFor";
import { getDateString } from "../functions/getDateString";
import { useEffect, useState } from "react";
import Link from "next/link";

export const EventHero = (props) => {
  const [dateHtml, setDateHtml] = useState([]);

  useEffect(() => {
    const fulldate = getDateString(
      new Date(props.startTime),
      new Date(props.endTime)
    ).split(" ");
    const lastEl = fulldate.pop();
    setDateHtml(
      <div>
        <strong style={{ fontSize: "20px" }}>{fulldate.join("")}</strong>
        <br />
        {lastEl}
      </div>
    );
  }, []);

  return (
    <div className="event-hero">
      <div className="event-hero__img-container">
        <div>{dateHtml}</div>
        <img src={urlFor(props.image)} alt={props.alt} />
      </div>
      <div className="event-hero__text-container">
        <h2>{props.title}</h2>
        <p className="event-hero__date-text">
          {getDateString(new Date(props.startTime), new Date(props.endTime))}
        </p>
        <p className="event-hero__description">{props.shortDescription}</p>
        <div className="event-hero__link">
          <Link href={`/event/${props.slug.current}`}>
            <a>Läs mer</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .event-hero__text-container {
          padding: var(--padding-y) var(--padding-x);
        }
        .event-hero__img-container > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: cover;
        }
        .event-hero__img-container {
          height: 200px;
          position: relative;
        }
        .event-hero__img-container > div {
          position: absolute;
          top: 0;
          left: 0;
          background-color: var(--color-sunny);
          width: 84px;
          height: 52px;
          font-size: 18px;
          color: var(--color-white);
          text-align: center;
        }

        .event-hero h2 {
          color: var(--color-orange);
          margin: 10px 0;
        }

        .event-hero__date-text {
          font-weight: bold;
        }

        .event-hero:not(:first-of-type) {
          display: none;
        }

        a {
          width: 174px;
          height: 40px;
          text-align: center;
          border-radius: 35px;
          background: var(--color-orange);
          border-radius: 35px;
          display: flex;
          justify-content: center;
          align-items: center;
          align-self: center;
          margin: 30px auto 20px auto;
          font-size: 16px;
          color: var(--color-white);
          text-decoration: none;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        @media (min-width: 768px) {
          .event-hero__text-container {
            padding: 0;
          }
          .event-hero__description {
            height: 65px;
          }
          .event-hero {
            width: 337px;
            padding: 0 0 96px 0;
          }

          .event-hero h2 {
            font-size: 24px;
          }

           {
            /* .event-hero:last-of-type .event-hero__link {
            display: block;
            margin-top: 50px;
            text-align: right;
          }

          .event-hero:not(last-of-type) .event-hero__link {
            display: none;
          } */
          }

          .event-hero:not(:first-of-type) {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};
