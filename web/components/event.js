import Link from "next/link";

const Event = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <div>
        {props.startTime} - {props.endTime}
      </div>
      <div>{props.excerpt}</div>
      <div>
        <Link href={props.slug}>
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

export default Event;
