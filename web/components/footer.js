import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";

export const Footer = (props) => {
  return (
    <footer>
      <div className="footer-container">
        <div className="gundla-logo">
          <img src="/gundla-logo-footer.png" alt="Gundla Gårdscafé" />
        </div>
        <div className="footer-info">
          <div className="footer-nav">
            <ul>
              <li>
                <Link href="/about">
                  <a>Om oss</a>
                </Link>
              </li>
              <li>
                <Link href="/order">
                  <a>Catering</a>
                </Link>
              </li>
              <li>
                <Link href="/fika">
                  <a>Fika</a>
                </Link>
              </li>
              <li>
                <Link href="/events">
                  <a>Evenemang</a>
                </Link>
              </li>
              <li>
                <Link href="/visit-us">
                  <a>Besök oss</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Kontakt</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-block">
            <BlockContent blocks={props.content.blockSectionOne} />
          </div>
          <div className="text-block">
            <BlockContent blocks={props.content.blockSectionTwo} />
          </div>
          <div className="socials">
            <h3 className="socials-text">Följ oss</h3>
            <a href={props.content.facebookUrl}>
              <img
                height="32"
                width="32"
                src="/facebook-icon.png"
                alt="Facebook ikon"
              />
            </a>
            <a href={props.content.instagramUrl}>
              <img
                height="32"
                width="32"
                src="/instagram-icon.png"
                alt="Instagram ikon"
              />
            </a>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          footer {
            background: url(/footer.png) no-repeat bottom center scroll;
            color: var(--color-chocolate);
          }

          .footer-container {
            max-width: var(--max-width);
            display: flex;
            flex-direction: column;
            padding: var(--padding-y) 0;
            margin: 0 auto;
          }

          a {
            color: var(--color-chocolate);
            text-decoration: none;
          }

          .gundla-logo {
            margin: 0 auto 30px auto;
          }

          .gundla-logo img {
            width: 132px;
          }

          .footer-nav {
            display: none;
          }

          .text-block,
          .socials {
            padding: var(--padding-y) var(--padding-x);
          }

          .socials-text {
            display: none;
          }

          .socials img {
            margin-right: 15px;
            width: 32px;
          }

          .footer-nav {
            display: none;
          }

          @media (min-width: 768px) {
            footer {
              background: url(/footer-desktop.png) repeat bottom center scroll;
            }
            .footer-nav {
              display: flex;
              padding: var(--padding-y) var(--padding-x);
            }

            .gundla-logo img {
              width: 182px;
            }

            .footer-info {
              display: flex;
              justify-content: space-between;
              width: 1100px;
            }

            .socials-text {
              display: block;
            }
          }
        `}
      </style>
    </footer>
  );
};
