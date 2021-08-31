import React, {useState} from 'react';
import Place from '../../../modals/Place';
import { Button } from '../../../shared/components/FormElements';
import { Card, Modal,Map } from '../../../shared/components/UIElements';
import './PlaceItem.css';

class PlaceItemProps{
    place!: Place;    
}

const PlaceItem = ({place} : PlaceItemProps) => {
    const [showMap, setShowMap] = useState(false);

    const openMapHandler = () => setShowMap(true);

    const closeMapHandler = () => setShowMap(false)

    return  (
        <React.Fragment>
            <Modal  show={showMap} 
                    onCancle={closeMapHandler}
                    header={place.address}
                    contentClass="place-item__modal-content"
                    footerClass="place-item__modal-actions"
                    footer={<Button onClick={closeMapHandler}>CLOSE</Button>}>
                <div className="map-container">
                    <Map center={place.location} zoom={16}/>
                </div>
            </Modal>
            <li className="place-item">
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
                        <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
                        <Button to={`/places/${place.id}`}>EDIT</Button>
                        <Button danger>DELETE</Button>
                    </div>
                </Card>
            </li>
        </React.Fragment>
    )
}

export default PlaceItem;