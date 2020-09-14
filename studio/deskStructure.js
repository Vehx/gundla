import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Content")
    .items([
      // Make a singleton of the document with ID “siteSettings”
      S.documentListItem().id("home").schemaType("home"),
      S.documentListItem().id("about").schemaType("about"),
      S.documentListItem().id("contact").schemaType("contact"),
      S.documentListItem().id("order").schemaType("order"),
      S.documentListItem().id("fika").schemaType("fika"),
      // Add a visual divider
      S.divider(),
      // Add the rest of the document types, but filter out the siteSettings type defined above
      ...S.documentTypeListItems().filter(
        (item) =>
          !["home", "about", "contact", "order", "fika"].includes(item.getId())
      ),
    ]);
