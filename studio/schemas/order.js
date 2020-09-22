export default {
  name: "order",
  title: "Order",
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
      name: "textBlockWithLink",
      title: "Text block with link",
      type: "textBlockWithLink",
    },
    {
      name: "imageBlock",
      title: "Image",
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
  ],
};
