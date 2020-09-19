export default {
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      hidden: true,
    },
    {
      name: "hero",
      title: "Hero",
      type: "hero",
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
      name: "textBlockWithLinkTwo",
      title: "Text block with link two",
      type: "textBlockWithLink",
    },
  ],
};
