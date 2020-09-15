import Head from "next/head";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export const Layout = (props) => (
  <div>
    <Head>
      <title>{props.title || "Gundla Gårdscafé"}</title>
      <link
        href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
        rel="stylesheet"
      />
    </Head>
    <Navbar />
    <div className="container">{props.children}</div>
    <Footer content={props.footer} />
    <style jsx global>{`
      @import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap");

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      :root {
        --heading-font: "Amatic SC", cursive;
        --paragraph-font: "PT Sans", sans-serif;
        --padding-x: 20px;
        --padding-y: 11px;
      }

      body {
        font-family: var(--paragraph-font);
      }

      p {
        line-height: 21px;
      }

      a {
        text-decoration: underline;
        color: hotpink;
      }

      h1,
      h2,
      h3 {
        font-family: var(--heading-font);
        font-weight: bold;
      }

      h3 {
        font-size: 18px;
        line-height: 23px;
      }
      }
      h2 {
        font-size: 24px;
        line-height: 30px;
      }
      h1 {
        font-size: 36px;
        line-height: 45px;
      }

      .button-s {
        font-size: 16px;
        line-height: 21px;
        color: #fff;
        background-color: #000;
        width: 264px;
        height: 25px;
      }
      .button-m {
        font-size: 18px;
        line-height: 21px;
        color: #000;
        background-color: light-grey;
        width: 315px;
        height: 50px;
        font-weight: bold;
      }
      .button-l {
        width: 225px;
        height: 41px;
        color: #fff;
      }
     {/* REMOVE THIS */}
      img {
        width: 100px;
      }
    `}</style>
  </div>
);
