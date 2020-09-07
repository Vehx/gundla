import Link from "next/link";

export const Event = (props) => {

  return (
    <div>
      <h1>{props.title}</h1>
      <div>
        {props.startDate}{" "}
        {props.startDate !== props.endDate && `- ${props.endDate}`}
      </div>
      <div>
        {props.startTime} - {props.endTime}
      </div>
      <div>{props.shortDescription}</div>
      <div>
        <Link href={`/event/${props.slug.current}`}>
        <a>Read more</a>
        </Link>
      </div>
      <style jsx>
        {`
          h1 {
          }
        `}
      </style>
    </div>
  );
};
