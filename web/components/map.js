import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

export const Map = () => {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
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
        <div className="marker">Här finns vi!👋</div>
      </Marker>
      <style jsx>
        {`
          .marker {
            padding: 10px;
            color: #fff;
            cursor: pointer;
            background: #1978c8;
            border-radius: 6px;
          }
        `}
      </style>
    </ReactMapGL>
  );
};
