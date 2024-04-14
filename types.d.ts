// Example fake data
export const fakeData = [
  {
    id: 1,
    name: "Location A",
    category: "Restaurant",
    quantity: 20,
    lat: 53.54992,
    lng: 10.00678,
  },
  {
    id: 2,
    name: "Location B",
    category: "Cafe",
    quantity: 15,
    lat: 53.55123,
    lng: 10.00543,
  },
  {
    id: 3,
    name: "Location C",
    category: "Starbucks",
    quantity: 10,
    lat: 53.53123,
    lng: 10.00443,
  },
  // Add more data points...
];

declare interface State {
  data: typeof fakeData;
  currentZoomLevel: number;
}

// Used for map-bounds page
declare interface Marker {
  lat: number;
  lng: number;
  state: string;
}
