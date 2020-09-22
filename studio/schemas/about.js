export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      hidden: true,
    },
    {
      name: "heroSmall",
      title: "Hero",
      type: "heroSmall",
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
      name: "imageBlock",
      title: "Image",
      type: "imageBlock",
    },
    {
      name: "blockSectionTwo",
      title: "Block section 2",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "signature",
      title: "Signature",
      type: "string",
    },
    {
      name: "imageBlockTwo",
      title: "Image",
      type: "imageBlock",
    },
  ],
};
