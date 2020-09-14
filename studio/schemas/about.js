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
      name: "blockSectionOne",
      title: "Block section 1",
      type: "array",
      of: [{ type: "block" }, { type: "signature" }, { type: "imageBlock" }],
    },
  ],
};
