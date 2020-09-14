import BlockContent from "@sanity/block-content-to-react";

export const Footer = (props) => {
  return (
    <footer>
      <div>Gundla Gårdscafé</div>
      <div>
        <BlockContent blocks={props.content} />
      </div>
      <style jsx>
        {`
          ul {
            list-style: none;
          }
        `}
      </style>
    </footer>
  );
};
