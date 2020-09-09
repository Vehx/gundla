import { useState, useEffect } from "react";
import client from "../client";
import groq from "groq";
import { Layout } from "../components/layout";
import { EventHero } from "../components/eventHero";
import { getInstagramPictures } from "../functions/getInstagramPictures";

const Index = (props) => {
  const [instagramPosts, setInstagramPosts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await getInstagramPictures("yrgo_webbutvecklare");
        setInstagramPosts((instagramPosts) => [...instagramPosts, response]);
      } catch (error) {
        console.log("Invalid image");
      }
    })();
  }, []);

  return (
    <Layout>
      <EventHero
        image={props.image}
        title={props.title}
        startTime={props.startTime}
        endTime={props.endTime}
        shortDescription={props.shortDescription}
      />
      {instagramPosts}
    </Layout>
  );
};

Index.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query;
  const query = groq`*[_type == "event"][0]`;
  return await client.fetch(query, { slug });
};

export default Index;
