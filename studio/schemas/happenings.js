export default {
  name: "happenings",
  title: "Happenings",
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
      name: "textBlockWithLinkOne",
      title: "Text block with link one",
      type: "textBlockWithLink",
    },
    {
      name: "textBlockWithLinkTwo",
      title: "Text block with link two",
      type: "textBlockWithLink",
    },
    {
      name: "textBlockWithLinkThree",
      title: "Text block with link three",
      type: "textBlockWithLink",
    },
    {
      name: "textBlockWithLinkFour",
      title: "Text block with link four",
      type: "textBlockWithLink",
    },
    {
      name: "textBlockWithLinkFive",
      title: "Text block with link five",
      type: "textBlockWithLink",
    },
  ],
};
