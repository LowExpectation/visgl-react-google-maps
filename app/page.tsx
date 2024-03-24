import Image from "next/image";
import simpleMap from "../public/images/simpleMap.png";
import markerCluster from "../public/images/markerCluster.png";
import directions from "../public/images/directions.png";
import advancedMarkers from "../public/images/advancedMarkers.png";
import geocoding from "../public/images/geolocation.png";
import places from "../public/images/places.png"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
          <a href="/places"> places library</a>
        </li>
        <p>
          <Image
            src={places}
            alt="Places"
            height={300}
            width={400}
          ></Image>
        </p>
      </ul>
    </main>
  );
}
