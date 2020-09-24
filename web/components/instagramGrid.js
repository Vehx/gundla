export const InstagramGrid = (props) => {
  return (
    <div>
      <h2>Följ oss på instagram</h2>
      <a href={props.href}>{props.children}</a>
      <style jsx>{`
        div {
          padding: var(--padding-y) var(--padding-x) 40px var(--padding-x);
        }
        h2 {
          padding-left: 4px;
          margin-bottom: 20px;
        }
        @media (min-width: 768px) {
          div {
            padding: 0;
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
