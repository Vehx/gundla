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
      name: "blockSectionOne",
      title: "Block section 1",
      type: "array",
      of: [{ type: "block" }, { type: "signature" }, { type: "imageBlock" }],
    },
    {
      name: "blockSectionTwo",
      title: "Block section 2",
      type: "array",
      of: [{ type: "block" }, { type: "signature" }, { type: "imageBlock" }],
    },
  ],
};
