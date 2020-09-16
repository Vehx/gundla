import BlockContent from "@sanity/block-content-to-react";

export const Footer = (props) => {
  return (
    <footer>
      <div className="gundla-logo">
        <img src="/gundla-logo-footer.png" alt="Gundla Gårdscafé" />
      </div>
      <div className="text-block">
        <BlockContent blocks={props.content.blockSectionOne} />
      </div>
      <div className="text-block">
        <BlockContent blocks={props.content.blockSectionTwo} />
      </div>
      <div className="socials">
        <img
          height="32"
          width="32"
          src="/facebook-icon.png"
          alt="Facebook ikon"
        />
        <img
          height="32"
          width="32"
          src="/instagram-icon.png"
          alt="Instagram ikon"
        />
      </div>
      <style jsx>
        {`
          footer {
            display: flex;
            flex-direction: column;
            background-color: var(--color-vanilla);
            color: var(--color-chocolate);
            padding: 30px 0;
          }

          .gundla-logo {
            margin: 0 auto 30px auto;
          }

          .gundla-logo img {
            width: 132px;
          }

          .text-block,
          .socials {
            padding: var(--padding-y) var(--padding-x);
          }

          .socials img {
            margin-right: 15px;
            width: 32px;
          }
        `}
      </style>
    </footer>
  );
};
