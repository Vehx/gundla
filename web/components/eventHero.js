import { urlFor } from "../functions/urlFor";
import { getDateString } from "../functions/getDateString";

export const EventHero = (props) => {
  return (
    <div>
      <img src={urlFor(props.image)} alt="" />
      <h2>{props.title}</h2>
      <p>{getDateString(new Date(props.startTime), new Date(props.endTime))}</p>
      <p>{props.shortDescription}</p>
    </div>
  );
};
