import Image from "next/image";

export default function Home() {
  const simpleMap = "/images/simpleMap.png";
  const markerCluster = "/images/markerCluster.png";
  const directions = "/images/directions.png";
  const advancedMarkers = "/images/advancedMarkers.png";
  const geocoding = "/images/geolocation.png";
  const places = "/images/places.png";
  const mapBounds = "/images/mapBounds.png";

  // We list the different pages that are to be used along with a screen shot incase user does not have a key
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <title>vis.gl Google Maps</title>
      <ul>
        <li>
          <a href="/simple-map">Simple Map with simple marker</a>
        </li>
        <p>
          <Image
            src={simpleMap}
            alt="Simple Map"
            height={300}
            width={400}
          ></Image>
        </p>
        <li>
          <a href="/marker-clusters">Clustered Markers with mock data</a>
        </li>
        <p>
          <Image
            src={markerCluster}
            alt="Marker Cluster"
            height={300}
            width={400}
          ></Image>
        </p>
        <li>
          <a href="/directions">Directions using routes library</a>
        </li>
        <p>
          <Image
            src={directions}
            alt="Directions"
            height={300}
            width={400}
          ></Image>
        </p>
        <li>
          <a href="/advanced-markers">
            Advanced Markers with InfoWindow and input filtering
          </a>
        </li>
        <p>
          <Image
            src={advancedMarkers}
            alt="Advanced Markers"
            height={300}
            width={400}
          ></Image>
        </p>
        <li>
          <a href="/geocoding"> Geooding library</a>
        </li>
        <p>
          <Image
            src={geocoding}
            alt="Geocoding"
            height={300}
            width={400}
          ></Image>
        </p>
        <li>
          <a href="/places"> Places library</a>
        </li>
        <p>
          <Image src={places} alt="Places" height={300} width={400}></Image>
        </p>
        <li>
          <a href="/map-bounds"> Map Viewport</a>
        </li>
        <p>
          <Image
            src={mapBounds}
            alt="Map Bounds"
            height={300}
            width={400}
          ></Image>
        </p>
      </ul>
    </main>
  );
}
