"use client";

import { useEffect, useState } from "react";
import { APIProvider, useMapsLibrary } from "@vis.gl/react-google-maps";

// Mandatory setup of the geocoding service
export default function Page() {
  return (
    <APIProvider
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
      version="weekly"
    >
      <Geocoding />
    </APIProvider>
  );
}

// Geocoding additional library usage
function Geocoding() {
  const geocodingApiLoaded = useMapsLibrary("geocoding");
  const [geocodingService, setGeocodingService] =
    useState<google.maps.Geocoder>();
  const [geocodingResult, setGeocodingResult] =
    useState<google.maps.GeocoderResult>();
  const [address, _setAddress] = useState("Av. George Washington & Santo Domingo Dominican Republic");
  const [apiStatus, setStatus] = useState<google.maps.GeocoderStatus>();

  // Above we called the library loader and we now set the class instance
  useEffect(() => {
    if (!geocodingApiLoaded) return;
    setGeocodingService(new window.google.maps.Geocoder());
  }, [geocodingApiLoaded]);

  // If the class was loaded successfully
  // We pass an address expecting a result
  useEffect(() => {
    if (!geocodingService || !address) return;
    console.log(geocodingService);

    // Check status = OK, or REQUEST_DENIED for a bad key, etc.
    geocodingService.geocode({ address }, (results, status) => {
      console.log(results);
      console.log(status);
      setStatus(status);
      if (results && status === "OK") {
        setGeocodingResult(results[0]);
      }
    });
  }, [geocodingService, address]);

  // Make sure the library loaded and then make sure a result was found
  if (!geocodingService) return <div>Loading...</div>;
  if (!geocodingResult) {
    return <div>Geocoding Result Not Loaded because: {apiStatus}</div>;
  } else {
    <div>Geocoding Result loaded...</div>;
  }

  // Return the results back to be displayed
  return (
    <div>
      <h1>{geocodingResult.formatted_address}</h1>
      <p>Latitude: {geocodingResult.geometry.location.lat()}</p>
      <p>Longitude: {geocodingResult.geometry.location.lng()}</p>
    </div>
  );
}
