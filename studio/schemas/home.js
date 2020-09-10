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
  ],
};
