export const InstagramGrid = (props) => {
  return (
    <div>
      <h3>Följ oss på instagram</h3>
      <a href={props.href}>{props.children}</a>
      <style jsx>{`
        div {
          padding: var(--padding-y) var(--padding-x);
        }
        h3 {
          padding-left: 4px;
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
