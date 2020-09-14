export default {
  name: "mosaic",
  title: "Mosaic",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "imageBlock" }],
    },
  ],
};
