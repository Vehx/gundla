import Link from "next/link";
import { useState } from "react";

export const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav>
      <span>
        {!showMenu && (
          <img
            onClick={() => setShowMenu(!showMenu)}
            src="./hamburger-icon.png"
            alt="X"
          />
        )}
      </span>
      <div className={!showMenu ? "active" : ""}>
        <img
          onClick={() => setShowMenu(!showMenu)}
          src="./x-icon.png"
          alt="X"
        />
        <ul>
          <li>
            <Link href="/">
              <a>Hem</a>
            </Link>
          </li>
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
              <a>Händer på gundla</a>
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
        <img
          className="navbar__logo"
          src="./gundla-logo-footer.png"
          alt="gundla loga"
        />
      </div>

      <style jsx>
        {`
          nav {
            z-index: var(--nav-z-index);
          }
          nav span img,
          nav div img:first-of-type {
            width: 40px;
            position: absolute;
            right: 30px;
            top: 30px;
            z-index: 3;
          }

          div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: fixed;
            transition: 0.3s;
            overflow: hidden;
            height: 100vh;
            width: 100vw;
            top: 0;
            right: 0;
            background-color: var(--color-white);
            z-index: var(--nav-z-index);
            padding: 100px var(--padding-x) 0 var(--padding-x);
          }

          .navbar__logo {
            margin: 0 auto 40px auto;
            width: 170px;
          }

          ul {
            height: 400px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          ul li a {
            color: var(--color-chocolate);
            list-style: none;
            text-decoration: none;
            font-size: 24px;
            font-weight: bold;
            font-family: var(--heading-font);
          }
          .active {
            transform: translateX(100vw);
          }
        `}
      </style>
    </nav>
  );
};
