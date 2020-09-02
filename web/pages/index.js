import client from "../client";
import groq from "groq";

const Index = (props) => {
    const { title = "Missing title", name = "Missing name" } = props;
    console.log(props);
    return (
        <article>
            <h1>{title}</h1>
            <span>By {name}</span>
        </article>
    );
};

Index.getInitialProps = async function (context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = "" } = context.query;
    const query = groq`*[_type == "event"]`;
    return await client.fetch(query, { slug });
};

export default Index;
