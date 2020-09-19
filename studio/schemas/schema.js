// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./blockContent";
import event from "./event";
import home from "./home";
import about from "./about";
import hero from "./hero";
import heroSmall from "./heroSmall";
import contactInfo from "./contactInfo";
import contact from "./contact";
import richText from "./richText";
import signature from "./signature";
import imageBlock from "./imageBlock";
import order from "./order";
import fika from "./fika";
import mosaic from "./mosaic";
import visitUs from "./visitUs";
import footer from "./footer";
import textBlockWithLink from "./textBlockWithLink";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    event,
    home,
    about,
    order,
    fika,
    blockContent,
    hero,
    heroSmall,
    contact,
    contactInfo,
    richText,
    signature,
    imageBlock,
    mosaic,
    visitUs,
    footer,
    textBlockWithLink,
  ]),
});
