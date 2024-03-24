import React, { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import locations from "../data/locations";

export default function MapWithMarkers() {
  const [activeMarkerId, setActiveMarkerId] = useState<number | null>(null);
  const position = { lat: 38.2, lng: -94 };
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredLocations, setFilteredLocations] = useState(locations);

  // The input box will trigger event and allow for filtering of input
  const handleSearchChange = (event: any) => {
    const { value } = event.target;
    setSearchTerm(value);
    const filteredData = locations.filter((location) =>
      location.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredLocations(filteredData);
  };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <div style={{ height: "100vh", width: "100%" }}>
        <Map
          defaultZoom={4}
          defaultCenter={position}
          mapId={process.env.NEXT_PUBLIC_MAP_ID as string}
          backgroundColor={"#000000"}
          zoomControl={true}
          gestureHandling={"greedy"}
          clickableIcons={true}
          disableDefaultUI={false}
        >
          {/* Tried to copy the google standard element to blend it */}
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search for a location..."
            style={{
              height: "6.3vh",
              width: "12%",
              position: "absolute",
              margin: "10px 100px -100px 178px",
              borderColor: "white white white grey",
              fontFamily: "Roboto, Arial, sans-serif",
              fontSize: 15,
              boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
              minWidth: "min-width: 66px",
              color: "rgb(86, 86, 86)",
              verticalAlign: "center",
              textAlign: "left",
              cursor: "auto",
              display: "table-cell",
              border: "0px",
            }}
          />
          {/* Map through the filtered data */}
          {filteredLocations.map((location) => (
            <React.Fragment key={location.key}>
              <AdvancedMarker
                title={location.key}
                position={{ lat: location.lat, lng: location.lng }}
                onClick={() => setActiveMarkerId(location.id)}
              />
              {/* Set marker and window for each fragment instance */}
              {/* Otherwise they just end up all opening or closing at once */}
              {activeMarkerId === location.id && (
                <InfoWindow
                  position={{ lat: location.lat, lng: location.lng }}
                  onCloseClick={() => setActiveMarkerId(null)}
                >
                  <div style={{ color: "black", backgroundColor: "white" }}>
                    <h1>{location.name}</h1>
                    <p>ID: {location.id}</p>
                  </div>
                </InfoWindow>
              )}
            </React.Fragment>
          ))}
        </Map>
      </div>
    </APIProvider>
  );
}
