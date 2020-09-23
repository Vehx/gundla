import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";

export const HappeningsSingle = (props) => {
  return (
    <div className="single">
      <h3>{props.title}</h3>
      <div className="single__line"></div>
      <BlockContent blocks={props.paragraph} />
      {props.url && (
        <div className="single__link-container">
          <Link href={props.url}>
            <a>
              <strong>{props.urlText}</strong>
              <img src={"./link-arrow.png"} />
            </a>
          </Link>
        </div>
      )}
      <style jsx>{`
        .single {
          padding: 20px 0;
          width: 100%;
        }
        .single__link-container {
          margin: 30px 0;
        }
        .single a img {
          width: 24px;
          margin-left: 10px;
        }

        .single__line {
          border: 2px solid var(--color-chocolate);
          width: 150px;
          border-radius: 25px;
          margin: 0 0 20px 0;
        }
        @media (min-width: 768px) {
        }
      `}</style>
    </div>
  );
};
