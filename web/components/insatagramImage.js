export const InstagramImage = ({ src, alt }) => {
  return (
    <>
      <img
        lazyloading="true"
        srcSet={`
        ${src.thumbnail_resources[0].src} 150w,
        ${src.thumbnail_resources[1].src} 240w,
        ${src.thumbnail_resources[2].src} 320w,
        ${src.thumbnail_resources[3].src} 480w,
        ${src.thumbnail_resources[4].src} 640w,
        `}
        src={src.thumbnail_resources[0].src}
        alt={alt}
      />
      <style jsx>{`
        img {
          width: calc(50% - 8px);
          margin: 0 4px 2px 4px;
        }
      `}</style>
    </>
  );
};
