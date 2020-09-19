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
      <h2>{props.title}</h2>
      <p className="event-hero__date-text">
        {getDateString(new Date(props.startTime), new Date(props.endTime))}
      </p>
      <p>{props.shortDescription}</p>
      {props.isOnHomePage ? (
        <div className="event-hero__link">
          <Link href="/">
            <a>
              Fler evenemang
              <img src="./link-arrow.png" />
            </a>
          </Link>
        </div>
      ) : (
        <div className="event-hero__link">
          <Link href="/">
            <a>Läs mer på eventsidan</a>
          </Link>
        </div>
      )}
      <style jsx>{`
        .event-hero {
          padding: var(--padding-y) var(--padding-x);
        }
        .event-hero__img-container > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: cover;
        }
        .event-hero__img-container {
          height: 168px;
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

        .event-hero__link img {
          width: 24px;
          margin-left: 10px;
        }

        .event-hero h2 {
          color: var(--color-chocolate);
        }

        .event-hero__date-text {
          font-weight: bold;
        }

        .event-hero__link:not(:first-of-type) {
          display: none;
        }

        .event-hero:first-of-type > .event-hero__link {
          display: block;
        }

        .event-hero:not(:first-of-type) {
          display: none;
        }
        @media (min-width: 768px) {
          .event-hero {
            width: 337px;
            padding: 0 0 96px 0;
          }

          .event-hero h2 {
            font-size: 24px;
          }

          .event-hero:first-of-type > .event-hero__link {
            display: none;
          }

          .event-hero:last-of-type > .event-hero__link {
            display: block;
            margin-top: 50px;
            text-align: right;
          }

          .event-hero:not(:first-of-type) {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};
