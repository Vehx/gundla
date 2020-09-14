export default {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      hidden: true,
    },
    {
      name: "blockSectionOne",
      title: "Block section 1",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "facebookUrl",
      title: "Facebook url",
      type: "url",
    },
    {
      name: "instagramUrl",
      title: "Instagram url",
      type: "url",
    },
  ],
};
