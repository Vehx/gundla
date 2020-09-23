import { MenuItems } from "./menuItems";
import Link from "next/link";

export const NavbarDesktop = (props) => {
  let isAtTop = props.isAtTop;

  return (
    <nav className={isAtTop ? "" : "scrolling-desktop"}>
      {isAtTop && (
        <Link href="/">
          <a>
            <img
              className="navbar__logo"
              src="/gundla-logo-nav-desktop.png"
              alt="gundla loga"
            />
          </a>
        </Link>
      )}

      <MenuItems isAtTop={isAtTop} />

      <style jsx>
        {`
          nav {
            display: none;
            z-index: var(--nav-z-index);
          }
          @media (min-width: 768px) {
            nav {
              position: absolute;
              top: 0;
              margin-top: 20px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-between;
              width: 100%;
            }

            .scrolling-desktop {
              background-color: var(--color-white);
              margin-top: 0;
              position: fixed;
            }

            img {
              width: 190px;
            }
          }
        `}
      </style>
    </nav>
  );
};
