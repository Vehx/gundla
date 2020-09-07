import { urlFor } from "../functions/urlFor";

export const EventHero = (props) => {
  return (
  <div>
    <img src={urlFor(props.image)} alt="" />
    <h2>{props.title}</h2>
    <p>{props.startTime}</p>
    <p>{props.endTime}</p>
    <p>{props.shortDescription}</p>
  </div>
  )
}
