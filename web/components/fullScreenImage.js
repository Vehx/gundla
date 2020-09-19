export const FullScreenImage = ({ src, alt }) => {
  return (
    <>
      <img lazyloading="true" src={src} alt={alt} />
      <style jsx>{`
        img {
          width: 100%;
          height: 274px;
          object-fit: cover;
          object-position: cover;
        }
        @media (min-width: 768px) {
          img {
            padding: 0;
            height: 474px;
          }
        }
      `}</style>
    </>
  );
};
