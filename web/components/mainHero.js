export const MainHero = (props) => {
  console.log(props);
  return (
    <div className="container">
      <img className="background-image" src={props.src} alt={props.alt}></img>
      <img className="logo-image" src={"./gundla-logo-hero.png"}></img>
      <div className="flex-container">
        <div>
          <h1>{props.title}</h1>
          <h3>{props.sub}</h3>
        </div>
        <a href={props.cta}>
          <button>Besök oss</button>
        </a>
        <a href="#">
          <img className="arrow-image" src={"./arrow-hero.png"}></img>
        </a>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          height: 100vh;
        }
        .background-image {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: -1;
        }
        .logo-image {
          width: 300px;
          margin-top: 57px;
        }

        .flex-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 300px;
        }

        .flex-container div {
          text-align: center;
          margin-bottom: 25px;
        }

        button {
          font-size: 18px;
          line-height: 23px;
          color: var(--color-white);
          background-color: var(--color-sunny);
          width: 225px;
          height: 41px;
          text-align: center;
          border-radius: 33px;
          box-shadow: inset 1px 2px 4px rgba(255, 255, 255, 0.22);
          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
          text-transform: uppercase;
        }

        .arrow-image {
          margin-top: 50px;
        }

        h1,
        h3 {
          text-transform: uppercase;
          color: var(--color-white);
        }
      `}</style>
    </div>
  );
};
