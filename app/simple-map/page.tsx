"use client";

import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

export default function Intro() {
  const position = { lat: 31.772543, lng: -106.460953 };
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <div style={{ height: "100vh", width: "100%" }}>
        <Map
          defaultZoom={13}
          defaultCenter={position}
          mapId={process.env.NEXT_PUBLIC_MAP_ID as string}
          backgroundColor={"#000000"}
          zoomControl={true}
          gestureHandling={"greedy"}
          clickableIcons={true}
          disableDefaultUI={false}
        >
          <AdvancedMarker position={position} onClick={() => setOpen(true)}>
            <Pin
              background={"blue"}
              borderColor={"green"}
              glyphColor={"orange"}
            />
          </AdvancedMarker>

          {open && (
            <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
              <div style={{ color: "black", backgroundColor: "white" }}>
              <p><h1>El Paso</h1></p>
              <p><h2>lat {position.lat}, lng {position.lng}</h2></p>
              </div>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}
