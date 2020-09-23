import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

export const Map = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 57.686411,
    longitude: 12.028276,
    zoom: 13,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_ACCESS_TOKEN}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <Marker
        latitude={57.686411}
        longitude={12.028276}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <img src="/marker.svg" />
      </Marker>
      <style jsx>
        {`
          img {
            width: 35px;
          }
        `}
      </style>
    </ReactMapGL>
  );
};
