export default {
  name: "contact",
  title: "Contact",
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
      name: "blockSectionOne",
      title: "Block section 1",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "contactInfo",
      title: "Contact info",
      type: "contactInfo",
    },
    {
      name: "blockSectionTwo",
      title: "Block section 2",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
