export default {
  title: "Text block with link",
  name: "textBlockWithLink",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Paragraph",
      name: "paragraph",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Url text",
      name: "urlText",
      type: "string",
    },
    {
      title: "Url",
      name: "url",
      type: "string",
    },
  ],
};
