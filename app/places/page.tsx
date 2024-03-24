"use client"
import React from "react";
import { useState } from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import MapHandlerAutoComplete from "../../components/maps/map-handler-auto-complete";
import { CustomMapControlAutoComplete } from "../../components/maps/map-control-auto-complete";

const MapCreation = () => {
  const position = { lat: 38.2, lng: -94 };
  const [selectedPlace, setSelectedPlace] =
    useState<google.maps.places.PlaceResult | null>(null);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <div style={{ height: "100vh", width: "100%" }}>
        {/* Outer Mapping main library */}
        <Map
          defaultZoom={4}
          defaultCenter={position}
          zoomControl={true}
          gestureHandling={"greedy"}
          clickableIcons={true}
          disableDefaultUI={false}
          mapId={process.env.NEXT_PUBLIC_MAP_ID as string}
        >
          {/* Places location search */}
          <CustomMapControlAutoComplete onPlaceSelect={setSelectedPlace} />
          {/* This one handles the zoom and boundary after places selection */}
          <MapHandlerAutoComplete place={selectedPlace} />
        </Map>
      </div>
    </APIProvider>
  );
};

export default MapCreation;
