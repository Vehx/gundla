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
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "blockSection",
      title: "Block section",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "mosaic",
      title: "Mosaic",
      type: "mosaic",
    },
  ],
};
