export default {
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      hidden: true,
    },
    {
      name: "textWithTitle",
      title: "Text with title",
      type: "textWithTitle",
    },
    {
      name: "contactInfo",
      title: "Contact info",
      type: "contactInfo",
    },
  ],
};
