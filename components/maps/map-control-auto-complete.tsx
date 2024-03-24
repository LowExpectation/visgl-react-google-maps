import React from 'react';
import { ControlPosition, MapControl } from '@vis.gl/react-google-maps';

import { PlaceAutocompleteClassic } from './autocomplete-classic';

type CustomAutocompleteControlProps = {
    onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
};

export const CustomMapControlAutoComplete = ({ onPlaceSelect }: CustomAutocompleteControlProps) => {
    return (
        <MapControl position={ControlPosition.TOP}>
            <div>
                <PlaceAutocompleteClassic onPlaceSelect={onPlaceSelect} />
            </div>
        </MapControl>
    );
};
