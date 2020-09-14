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
  </div>
);
