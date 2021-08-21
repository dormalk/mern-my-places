import React from 'react';
import Place from '../../../modals/Place';
import { Card } from '../../../shared/components/UIElements';
import './PlaceItem.css';


class PlaceItemProps{
    place!: Place;    
}

const PlaceItem = ({place} : PlaceItemProps) => {
    return  <li className="place-item">
                <Card>
                    <div className="place-item__image">
                        <img src={place.imageUrl} alt={place.title}></img>
                    </div>
                    <div className="place-item__info">
                        <h2>{place.title}</h2>
                        <h3>{place.address}</h3>
                        <p>{place.description}</p>
                    </div>
                    <div className="place-item__actions">
                        <button>VIEW ON MAP</button>
                        <button>EDIT</button>
                        <button>DELETE</button>
                    </div>
                </Card>
            </li>
}

export default PlaceItem;