import Link from "next/link";
import { useState } from "react";

export const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav>
      <span>
        <img onClick={() => setShowMenu(!showMenu)} src="" alt="X" />
      </span>
      {showMenu && (
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
            <Link href="/visit-us">
              <a>Besök oss</a>
            </Link>
          </li>
        </ul>
      )}
      <style jsx>
        {`
          ul {
            list-style: none;
          }
        `}
      </style>
    </nav>
  );
};
