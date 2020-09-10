export default {
  title: "Hero",
  name: "hero",
  type: "object",
  fields: [
    {
      title: "Hero title",
      name: "heroTitle",
      type: "string",
    },
    {
      title: "Hero image",
      name: "heroImage",
      type: "image",

      // Here the user will be prompted to write any string to describe the resource type.
      // There is a way to limit this to a number of preset strings and provide a pull-down
      // or radio buttons to select resource. This is left as an exercise for the reader! See
      // the reference docs!
    },
    {
      title: "Hero CTA",
      name: "heroCta",
      type: "url",
    }
  ],
};
