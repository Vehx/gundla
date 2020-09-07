import Link from "next/link";

export const Footer = (props) => {
  return (
    <footer>
      <div>Social media Facebook Instagram</div>
      <div>Gundla gardscafe</div>
      <div>
        <ul>
          <li>
            <Link href="/">
              <a>Startsida</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>Om oss</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Kontakt</a>
            </Link>
          </li>
          <li>
            <Link href="/order">
              <a>Beställa</a>
            </Link>
          </li>
          <li>
            <Link href="/fika">
              <a>Fika</a>
            </Link>
          </li>
          <li>
            <Link href="/events">
              <a>Händer på gundla</a>
            </Link>
          </li>
          <li>
            <Link href="/event">
              <a>Eventinvidkalender</a>
            </Link>
          </li>
          <li>
            <Link href="/visit-us">
              <a>Besök oss</a>
            </Link>
          </li>
        </ul>
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
