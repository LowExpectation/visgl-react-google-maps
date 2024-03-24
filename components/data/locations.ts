// Fill with any type of data, this was constructed with a python script

type RawData = [number, string, number, number];

type Location = {
    key: string;
    id: number;
    name: string;
    lat: number;
    lng: number;
};

const locations: RawData[] = [
    [0,'2100 S Priest Dr, Tempe, AZ 85282', 36.816145619660816, -101.88127815743569],
    [1,'3609 E Thomas Rd, Phoenix, AZ 85018', 31.790981183652182, -109.29793175140759],
    [2,'1175 W Rte 66, Flagstaff, AZ 86001', 31.102917099163477, -90.10074958425383],
    [3,'1420 W State Rte 89A, Sedona, AZ 86336', 32.88612908014729, -97.8581296540177],
    [4,'9G5F+26 San Carlos, Arizona', 31.702390626816467, -103.32514419925462],
    [5,'512 11 Mile Corner, Casa Grande, AZ 85194', 35.443743017223895, -106.81291157358692],
];

const formatted: Location[] = locations.map(([id, name, lat, lng]) => ({
    id,
    name,
    lat,
    lng,
    key: JSON.stringify({ id, name, lat, lng })
}));

export default formatted;
