import Link from "next/link";

export const Event = (props) => {
  return (
    <div className="event">
      <div className="event__date">
        <strong>
          {props.startDate}{" "}
          {props.startDate !== props.endDate && `- ${props.endDate}`}
        </strong>{" "}
        | {props.startTime} - {props.endTime}
      </div>
      <div className="event__text">
        <h3>{props.title}</h3>
        <div className="event__description">{props.shortDescription}</div>
        <div className="event__button">
          <Link href={`/event/${props.slug.current}`}>
            <a>Läs mer</a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          a {
            color: var(--color-white);
            text-align: center;
            text-transform: uppercase;
            text-decoration: none;
            letter-spacing: 0.1em;
            height: 40px;
            width: 162px;
            background: var(--color-orange);
            border-radius: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            align-self: center;
            margin: 0 auto;
          }

          h3 {
            font-weight: bold;
            padding-top: 10px;
          }

          .event {
            width: 100%;
            padding: 20px 5px;
            margin-bottom: 20px;
            background-color: var(--color-white);
          }

          .event__date {
            padding-top: 10px;
          }

          .event__text {
            display: flex;
            flex-direction: column;
          }

          .event__description {
            padding-bottom: 30px;
          }

          @media (min-width: 768px) {
            .event {
              padding: 20px 20px;
            }

            .event__text {
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
            }

            h3 {
              font-size: 18px;
              line-height: 23px;
              padding-right: 10px;
              width: 83px;
            }

            .event__description {
              width: 260px;
              padding: 10px;
            }

            .a {
              width: 119px;
            }
          }
        `}
      </style>
    </div>
  );
};
