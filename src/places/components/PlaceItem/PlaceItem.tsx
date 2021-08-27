import React from 'react';
import Place from '../../../modals/Place';
import { Button } from '../../../shared/components/FormElements';
import { Card } from '../../../shared/components/UIElements';
import './PlaceItem.css';


class PlaceItemProps{
    place!: Place;    
}

const PlaceItem = ({place} : PlaceItemProps) => {
    return  <li className="place-item">
                <Card className="place-item__content">
                    <div className="place-item__image">
                        <img src={place.imageUrl} alt={place.title}></img>
                    </div>
                    <div className="place-item__info">
                        <h2>{place.title}</h2>
                        <h3>{place.address}</h3>
                        <p>{place.description}</p>
                    </div>
                    <div className="place-item__actions">
                        <Button inverse>VIEW ON MAP</Button>
                        <Button to={`/places/${place.id}`}>EDIT</Button>
                        <Button danger>DELETE</Button>
                    </div>
                </Card>
            </li>
}

export default PlaceItem;