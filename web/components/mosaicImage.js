export const MosaicImage = (props) => {
  return (
    <>
      <img src={props.src} alt={props.alt} />
      <style jsx>{`
        img {
          width: calc(100% / 3);
          object-fit: cover;
          object-postion: cover;
        }
        @media (min-width: 768px) {
          img {
          }
        }
      `}</style>
    </>
  );
};
