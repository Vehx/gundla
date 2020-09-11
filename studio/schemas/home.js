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
      name: "textWithTitleOne",
      title: "Text with title",
      type: "textWithTitle",
    },
    {
      name: "textWithTitleTwo",
      title: "Text with title",
      type: "textWithTitle",
    },
    {
      name: "richText",
      title: "Rich text",
      type: "richText",
    },
    {
      name: "test",
      title: "Test text",
      type: "array",
      of: [{ type: "block" }, { type: "signature" }],
    },
  ],
};
