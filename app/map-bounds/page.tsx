"use client";

// Google Maps
import {
  APIProvider,
  Map,
  AdvancedMarker,
  useMap,
} from "@vis.gl/react-google-maps";
// Types
import { Marker } from "../../types";
import { useEffect, useState } from "react";
// Datatable
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const MyMapComponent = () => {
  const map = useMap();
  const markers = [
    // New York
    { lat: 40.7128, lng: -74.006, state: "New York" },
    // California
    { lat: 41.0522, lng: -121.2437, state: "California" },
    // North Dakota
    { lat: 47.0522, lng: -100.2437, state: "North Dakota" },
    // Texas
    { lat: 28.0522, lng: -100.2437, state: "Texas" },
    // Nebraska
    { lat: 40, lng: -100, state: "Nebraska" },
  ];

  const [visibleMarkers, setVisibleMarkers] = useState<Marker[]>([]);

  // Get the camera changes and create filtered output
  const handleCameraChange = () => {
    if (map) {
      const markersInsideViewport: Marker[] = [];
      const markersOutsideViewport: Marker[] = [];

      // Loop through the markers
      markers.forEach((coord) => {
        // Create a new LatLngBounds object for the current marker
        let markerBounds = new google.maps.LatLngBounds();
        markerBounds.extend(new google.maps.LatLng(coord.lat, coord.lng));

        // Get the current viewport based on current camera change
        let mapBounds = map.getBounds();
        if (mapBounds) {
          if (
            // Check if current mapped marker is within viewport
            mapBounds.contains(markerBounds.getNorthEast()) &&
            mapBounds.contains(markerBounds.getSouthWest())
          ) {
            // Marker is in view point
            markersInsideViewport.push(coord);
          }
          // Marker is not in the view point
          else {
            markersOutsideViewport.push(coord);
          }
        }
      });
      const filteredViewport: Marker[] = filterMarkers(markersOutsideViewport);
      setVisibleMarkers(filteredViewport);
    }
  };

  // Filter the array based on current bounds
  const filterMarkers = (MarkersToRemove: Marker[]) => {
    // This function first gets the markers that are not in the markers to remove based on lat/lng
    let nonMatchingValues = markers
      .filter(
        (obj1) =>
          !MarkersToRemove.some(
            (obj2) => obj1.lat === obj2.lat && obj1.lng === obj2.lng
          )
      )
      // Next we add values where markers are not in the markers to remove based on lat/lng
      .concat(
        MarkersToRemove.filter(
          (obj1) =>
            !markers.some(
              (obj2) => obj1.lat === obj2.lat && obj1.lng === obj2.lng
            )
        )
      );
    // This value gets sent to the Advanced Marker and the Prime Datatable
    return nonMatchingValues;
  };

  return (
    <div>
      <title> Map Bounds </title>
      <Map
        style={{ height: "70vh", width: "100%" }}
        defaultZoom={5}
        defaultCenter={{ lat: 39, lng: -100 }}
        zoomControl={true}
        onCameraChanged={handleCameraChange}
        gestureHandling={"greedy"}
        clickableIcons={true}
        disableDefaultUI={false}
        mapId={process.env.NEXT_PUBLIC_MAP_ID}
      >
        {visibleMarkers.map((marker, index) => (
          <AdvancedMarker key={index} position={marker} />
        ))}
      </Map>

      {/* Create the Prime react table based off of the filtered data */}
      <DataTable
        value={visibleMarkers}
        className="card"
        stripedRows
        showGridlines
        scrollable
        sortField="state"
        sortMode="single"
        filterDisplay="row"
        sortOrder={1}
        removableSort
        paginator={true}
        rows={5}
        rowsPerPageOptions={[5, 10, 15, 20]}
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}"
      >
        <Column field="lat" header="Latitude" />
        <Column field="lng" header="Longitude" />
        <Column field="state" header="State" />
      </DataTable>
    </div>
  );
};

const MyPage = () => {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <MyMapComponent />
    </APIProvider>
  );
};

export default MyPage;
