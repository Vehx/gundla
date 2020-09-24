import Link from "next/link";

export const MainHero = (props) => {
  return (
    <div className="hero">
      <img
        className="hero__background-image"
        src={props.src}
        alt={props.alt}
        loading="lazy"
      />
      {/* <video
        className="hero__background-image"
        src="./video-vertical.mp4"
        type="video/mp4"
        autoPlay
        loop
      ></video> */}
      <img
        className="hero__logo-image"
        src={"/gundla-logo-hero.png"}
        alt="gundla logo"
        loading="lazy"
      />
      <div className="hero__flex-container">
        <div>
          <h1>{props.title}</h1>
          <h2>{props.sub}</h2>
        </div>
        <Link href={props.cta}>
          <a>
            <button>Besök oss</button>
          </a>
        </Link>
        <a href="#about-gundla">
          <picture className="hero__arrow-image">
            <source media="(min-width:650px)" srcSet="arrow-hero.png" />
            <source media="(min-width:465px)" srcSet="arrow-hero-mobile.png" />
            <img src={"/arrow-hero.png"} alt="Pil ned" loading="lazy" />
          </picture>
        </a>
      </div>
      <style jsx>{`
        video {
          width: 100%;
          height: auto;
        }

        .hero {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          height: 100vh;
        }
        .hero__background-image {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: -1;
          object-fit: cover;
          object-postion: cover;
        }
        .hero__logo-image {
          width: 300px;

          margin-top: 57px;
        }

        .hero__flex-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 450px;
          padding: 0 var(--padding-x);
        }

        .hero__flex-container div {
          text-align: center;
          margin-bottom: 25px;
        }

        button {
          font-size: 18px;
          line-height: 23px;
          color: var(--color-white);
          background-color: var(--color-sunny);
          width: 316px;
          height: 48px;
          text-align: center;
          border-radius: 33px;
          box-shadow: inset 1px 2px 4px rgba(255, 255, 255, 0.22);
          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
          text-transform: uppercase;
        }

        .hero__arrow-image img {
          margin-top: 50px;
          width: 60px;
        }

        h1 {
          margin: 40px 0;
        }

        h2 {
          margin: 40px 0;
        }

        h1,
        h2 {
          text-transform: uppercase;
          color: var(--color-white);
        }
        @media (min-width: 768px) {
          button {
            font-size: 24px;
            width: 510px;
            height: 50px;
          }

          h1 {
            margin-bottom: 10px;
          }

          h2 {
            margin-top: 0;
            margin-bottom: 80px;
          }

          .hero__flex-container {
            margin-top: 450px;
          }
          .hero__logo-image {
            display: none;
          }

          .hero__arrow-image img {
            width: 146px;
          }
        }
      `}</style>
    </div>
  );
};
