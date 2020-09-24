import Link from "next/link";
import BlockContent from "@sanity/block-content-to-react";

export const TextBlockWithLink = (props) => {
  return (
    <div id={props.id}>
      <h2>{props.title}</h2>
      <BlockContent blocks={props.paragraph} />
      <Link href={props.url}>
        <a>
          {props.urlText}
          <img src="/link-arrow.png" alt="pil" loading="lazy" />
        </a>
      </Link>
      <style jsx>
        {`
          div {
            padding: 40px var(--padding-x);
          }
          h2 {
            padding-bottom: var(--padding-y);
          }

          img {
            width: 24px;
            margin-left: 10px;
          }

          @media (min-width: 768px) {
            div {
              padding: 100px 200px 60px 200px;
            }

            h2 {
              text-align: center;
              padding-bottom: 40px;
            }
          }
        `}
      </style>
    </div>
  );
};
