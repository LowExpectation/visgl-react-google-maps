import { useMap } from '@vis.gl/react-google-maps';
import React, { useEffect } from 'react';

interface Props {
    place: google.maps.places.PlaceResult | null;
}

// We are passing this the selected place from input box
const MapHandler = ({ place }: Props) => {

    // use the current API map session (with ID)
    const map = useMap();

    // If all initialized then we focus based on the results location
    useEffect(() => {
        if (!map || !place) return;

        if (place.geometry?.viewport) {
            map.fitBounds(place.geometry?.viewport);
        }
    }, [map, place]);

    return null;
};

export default React.memo(MapHandler);