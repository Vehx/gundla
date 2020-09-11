export const MainHero = (props) => {
  return (
    <div>
      <img src={props.src} alt={props.alt}></img>
      <h1>{props.title}</h1>
      <a href={props.cta}>
        <button>CTA</button>
      </a>
    </div>
  );
};
