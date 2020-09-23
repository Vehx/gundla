import Link from "next/link";

export const MenuItems = (props) => {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>
            <p>Hem</p>
            {!props.isAtTop && (
              <img src="/gundla-flower.png" alt="gundla flower" />
            )}
          </a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a className={props.isAtTop ? "" : "show"}>Om oss</a>
        </Link>
      </li>
      <li>
        <Link href="/order">
          <a className={props.isAtTop ? "" : "show"}>Catering</a>
        </Link>
      </li>
      <li>
        <Link href="/fika">
          <a className={props.isAtTop ? "" : "show"}>Fika</a>
        </Link>
      </li>
      <li>
        <Link href="/events">
          <a className={props.isAtTop ? "" : "show"}>Evenemang</a>
        </Link>
      </li>
      <li>
        <Link href="/happenings">
          <a className={props.isAtTop ? "" : "show"}>Händer på gundla</a>
        </Link>
      </li>
      <li>
        <Link href="/visit-us">
          <a className={props.isAtTop ? "" : "show"}>Besök oss</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a className={props.isAtTop ? "" : "show"}>Kontakt</a>
        </Link>
      </li>
      <style jsx>{`
        ul {
          height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        ul li a,
        ul li a p {
          color: var(--color-chocolate);
          list-style: none;
          text-decoration: none;
          font-size: 24px;
          font-weight: bold;
          font-family: var(--heading-font);
        }

        ul li a img {
          display: none;
        }
        @media (min-width: 768px) {
          ul {
            flex-direction: row;
            color: var(--color-white);
            height: 83px;
            background-color: transparent;
            justify-content: space-between;
            align-items: center;
            width: var(--max-width);
          }

          ul li a {
            color: var(--color-white);
            font-weight: normal;
            font-family: var(--paragraph-font);
          }

          ul li a img {
            display: inline;
          }

          ul li a p {
            display: none;
          }

          img {
            width: 48px;
          }

          .show {
            color: var(--color-black) !important;
          }
          }
        }
      `}</style>
    </ul>
  );
};
