export const HeroSmall = (props) => {
  return (
    <div>
      <img src={props.src} alt={props.alt}></img>
      <style jsx>{`
        img {
          width: 100%;
          height: 464px;
          object-fit: cover;
          object-postion: cover;
        }
      `}</style>
    </div>
  );
};
