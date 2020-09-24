export const HeroSmall = (props) => {
  return (
    <div>
      <img src={props.src} alt={props.alt} loading="lazy"></img>
      <style jsx>{`
        img {
          width: 100%;
          height: 464px;
          object-fit: cover;
          object-postion: cover;
        }
        @media (min-width: 768px) {
          img {
            height: 587px;
          }
        }
      `}</style>
    </div>
  );
};
