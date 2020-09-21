import { useState, useRef, useEffect } from "react";
import { MenuItems } from "./menuItems";

export const NavbarDesktop = (props) => {
  const navEl = useRef(null);
  const [isAtTop, setIsAtTop] = useState(true);

  // if (process.browser) {
  //   let prevScrollpos = window.pageYOffset;
  //   window.onscroll = () => {
  //     const currentScrollPos = window.pageYOffset;
  //     prevScrollpos >= 100 ? setIsAtTop(false) : setIsAtTop(true);
  //     prevScrollpos = currentScrollPos;
  //   };
  // }

  return (
    <nav ref={navEl} className={isAtTop ? "" : "scrolling"}>
      {isAtTop && (
        <img
          className="navbar__logo"
          src="./gundla-logo-nav-desktop.png"
          alt="gundla loga"
        />
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

            .scrolling {
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
