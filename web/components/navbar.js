import { useState, useEffect } from "react";
import { MenuItems } from "./menuItems";

export const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  let isAtTop = props.isAtTop;

  return (
    <nav>
      <div className={`hamburger-container ${isAtTop ? "" : "scrolling"}`}>
        {!showMenu && (
          <>
            <img
              className="hamburger-icon"
              onClick={() => setShowMenu(!showMenu)}
              src={
                isAtTop ? "/hamburger-icon.png" : "/hamburger-icon-black.png"
              }
              alt="X"
            />
            {!isAtTop && (
              <img
                className={"flower-icon"}
                src="/gundla-flower.png"
                alt="gundla flower"
              />
            )}
          </>
        )}
      </div>
      <div className={`navbar-container ${!showMenu ? "active" : ""}`}>
        <img onClick={() => setShowMenu(!showMenu)} src="/x-icon.png" alt="X" />
        <MenuItems isAtTop={isAtTop} />
        <img
          className="navbar__logo"
          src="/gundla-logo-footer.png"
          alt="gundla loga"
        />
      </div>

      <style jsx>
        {`
          nav {
            overflow-x: hidden;
            z-index: var(--nav-z-index);
          }
          nav .hamburger-container .hamburger-icon,
          nav .navbar-container img:first-of-type {
            width: 40px;
            position: fixed;
            right: 30px;
            top: 20px;
            z-index: 3;
          }

          .navbar-container {
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

          .scrolling {
            background-color: #fff;
            width: 100%;
            height: 72px;
            z-index: var(--nav-z-index);
            position: fixed;
          }

          .flower-icon {
            width: 40px;
            position: absolute;
            left: 30px;
            top: 4px;
            z-index: 3;
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
