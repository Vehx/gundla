export const getInstagramPictures = async (profileName) => {
  const baseUrl = "https://www.instagram.com";
  const profileUrl = `${baseUrl}/${profileName}`;
  const jsonDataUrl = `${profileUrl}/?__a=1`;

  const response = await fetch(jsonDataUrl);
  const jsonData = await response.json();
  const pictures = jsonData.graphql.user.edge_owner_to_timeline_media.edges;

  const pictureUrls = pictures.map((picture) => {
    return (
      <img
        key={picture.node.thumbnail_resources[4].src}
        src={picture.node.thumbnail_resources[4].src}
      />
    );
  });

  if (response.ok) {
    return pictureUrls;
  } else {
    throw new Error(pictures);
  }
};
