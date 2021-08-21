import React from "react";
import Place from "../../../modals/Place";
import { Card } from "../../../shared/components/UIElements";
import PlaceItem from "../PlaceItem/PlaceItem";
import './PlacesList.css';

class PlacesListProps {
    items: Array<Place> = []
}

const PlacesList = (props:PlacesListProps) => {
    if(props.items.length === 0){
        return <div className="place-list center">
            <Card>
                <h2>No places found. Maybe create one?</h2>
                <button>Shere Place</button>
            </Card>
        </div>
    }

    return <ul className="place-list">
        {props.items.map(place => <PlaceItem key={place.id} place={place}/>)}
    </ul>

}
export default PlacesList;