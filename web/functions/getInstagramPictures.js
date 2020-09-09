export const getInstagramPictures = async (profileName) => {
  const baseUrl = "https://www.instagram.com";
  const profileUrl = `${baseUrl}/${profileName}`;
  const jsonDataUrl = `${profileUrl}/?__a=1`;

  const response = await fetch(jsonDataUrl);
  const jsonData = await response.json();
  const pictures = jsonData.graphql.user.edge_owner_to_timeline_media.edges;

  if (response.ok) {
    return pictures;
  } else {
    throw new Error(pictures);
  }
};
