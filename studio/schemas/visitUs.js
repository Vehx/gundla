export default {
  name: "visitUs",
  title: "Visit us",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      hidden: true,
    },
    {
      title: "Hero image",
      name: "heroImage",
      type: "imageBlock",
    },
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      title: "Adress",
      name: "adress",
      type: "string",
    },
    {
      title: "City",
      name: "city",
      type: "string",
    },
    {
      title: "Zip code",
      name: "zipCode",
      type: "string",
    },
    {
      name: "blockSectionOne",
      title: "Block section 1",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Url Text",
      name: "urlText",
      type: "string",
    },
    {
      title: "Url",
      name: "url",
      type: "string",
    },
    {
      name: "blockSectionTwo",
      title: "Block section 2",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
