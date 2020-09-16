export default {
  name: "fika",
  title: "Fika",
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
      of: [{ type: "block" }, { type: "mosaic" }],
    },
  ],
};