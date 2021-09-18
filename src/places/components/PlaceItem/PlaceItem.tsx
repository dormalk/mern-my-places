import React, {useState,useContext} from 'react';
import Place from '../../../modals/Place';
import { Button } from '../../../shared/components/FormElements';
import { Card, Modal,Map } from '../../../shared/components/UIElements';
import { AuthContext } from '../../../shared/context/auth-context';
import './PlaceItem.css';

class PlaceItemProps{
    place!: Place;    
}

const PlaceItem = ({place} : PlaceItemProps) => {
    const auth = useContext(AuthContext)

    const [showMap, setShowMap] = useState(false);
    const [showConfirmModal,setShowConfirmModal] = useState(false)

    const openMapHandler = () => setShowMap(true);

    const closeMapHandler = () => setShowMap(false)

    const showDeletewarningHandler = () => setShowConfirmModal(true)

    const showDeleteWarningHandler = () => setShowConfirmModal(false)

    const confirmDeleteHandler = () => {
        console.log('DELETE')
        setShowConfirmModal(false)
    }

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
            <Modal  show={showConfirmModal}
                    header="Are you shure?"
                    footerClass="place-item__modal-actions"
                    footer={
                        <React.Fragment>
                            <Button inverse onClick={showDeleteWarningHandler}>CANCLE</Button>
                            <Button danger onClick={confirmDeleteHandler}>DELETE</Button>
                        </React.Fragment>
                    }>
                Do you want to process and delete this place? 
                Please note that it can't be undone thereafter.
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
                        {
                            !auth.isLoggedIn &&
                            <Button to={`/places/${place.id}`}>EDIT</Button>
                        }
                        {
                            !auth.isLoggedIn &&
                            <Button danger onClick={showDeletewarningHandler}>DELETE</Button>
                        }
                    </div>
                </Card>
            </li>
        </React.Fragment>
    )
}

export default PlaceItem;