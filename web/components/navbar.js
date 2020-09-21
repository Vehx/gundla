import { useState } from "react";
import { MenuItems } from "./menuItems";

export const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

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
        <MenuItems isAtTop={isAtTop} />
        <img
          className="navbar__logo"
          src="./gundla-logo-footer.png"
          alt="gundla loga"
        />
      </div>

      <style jsx>
        {`
          nav {
            overflow-x: hidden;
            z-index: var(--nav-z-index);
          }
          nav span img,
          nav div img:first-of-type {
            width: 40px;
            position: fixed;
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

          .active {
            transform: translateX(100vw);
          }
          @media (min-width: 768px) {
            nav {
              display: none;
            }
          }
        `}
      </style>
    </nav>
  );
};
