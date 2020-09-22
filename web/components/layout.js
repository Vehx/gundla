import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import { Navbar } from "./navbar";
import { NavbarDesktop } from "./navbarDesktop";
import { Footer } from "./footer";
import { checkAtTop } from "../functions/checkIfAsTop";

export const Layout = (props) => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    if (process.browser) {
      let prevScrollpos = window.pageYOffset;
      window.onscroll = () => {
        const currentScrollPos = window.pageYOffset;
        prevScrollpos >= 100 ? setIsAtTop(false) : setIsAtTop(true);
        prevScrollpos = currentScrollPos;
      };
    }
  }, [isAtTop]);

  return (
    <div>
      <Head>
        <title>{props.title || "Gundla Gårdscafé"}</title>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Navbar isAtTop={isAtTop} />
      <NavbarDesktop isAtTop={isAtTop} />
      <div>{props.children}</div>
      <Footer content={props.footer} />
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;

          font-family: var(--paragraph-font);
        }

        :root {
          --heading-font: "Amatic SC", cursive;
          --paragraph-font: "PT Sans", sans-serif;
          --color-vanilla: #fff9e3;
          --color-sunny: #e7ac0f;
          --color-chocolate: #ac794d;
          --color-black: #000;
          --color-white: #fff;
          --padding-x: 20px;
          --padding-y: 11px;
          --max-width: 1045px;
          --nav-z-index: 2;
        }

        .container {
          max-width: var(--max-width);
          display: flex;
          flex-direction: column;
          margin: 0 auto;
        }

        p {
          line-height: 21px;
          font-family: var(--paragraph-font);
          font-size: 16px;
          margin-bottom: 10px;
        }

        a {
          text-decoration: underline;
          font-family: var(--paragraph-font);
          color: var(--color-black);
        }

        ul {
          list-style: none;
        }

        h1,
        h2,
        h3 {
          font-family: var(--heading-font);
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        h3 {
          font-size: 18px;
          line-height: 23px;
          margin-bottom: 10px;
        }

        h2 {
          font-size: 24px;
          line-height: 30px;
        }
        h1 {
          font-size: 36px;
          line-height: 45px;
        }

        button {
          font-family: var(--paragraph-font);
          border: none;
          cursor: pointer;
        }

        .button-form {
          font-size: 18px;
          line-height: 23px;
          color: var(--color-white);
          background-color: var(--color-sunny);
          width: 305px;
          height: 41px;
          text-align: center;
          border-radius: 33px;
          box-shadow: inset 1px 2px 4px rgba(255, 255, 255, 0.22);
          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }

         {
          /* REMOVE THIS */
        }
        img {
          width: 100px;
        }
        @media (min-width: 768px) {
          h3 {
            font-size: 36px;
            line-height: 45px;
            margin-bottom: 10px;
          }

          h2 {
            font-size: 36px;
            line-height: 45px;
          }
          h1 {
            font-size: 64px;
            line-height: 81px;
          }
        }
      `}</style>
    </div>
  );
};
