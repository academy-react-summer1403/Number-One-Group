import { useDisclosure } from '@nextui-org/react';
import { CheckTrueIcon, CloseIcon, LocationIcon } from '../../../../core/icon';
import { CreateModal } from '../../../common';
import "leaflet/dist/leaflet.css";
import { MapContainer as LeafletMap, TileLayer, Marker } from "react-leaflet";
import "./ChooseAddress.css"
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { EditProfile } from '../../../../core/services/api/put-data';
import mapPicture from "../../../../assets/images/Map.png"

const ChooseAddress = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [initialPosition, setInitialPosition] = useState([36.5969567, 53.0645213])
    const markerRef = useRef(null);
    const profile = useSelector(state => state.UserInfo.info)

    // Set positions to user info
    const setPosToProfile = (pos) => {
        if (Object.keys(profile).length !== 0 && profile) {
            const newProfile = { ...profile, latitude: pos[0], longitude: pos[1] };
            EditProfile(newProfile)
        }
    };

    // Handle move Marker
    const handleMoveMarker = () => {
        const markerR = markerRef.current;

        if (markerR !== null) {
            const newLatitude = markerR.getLatLng().lat;
            const newLongitude = markerR.getLatLng().lng;

            // Set Latitude and Longitude
            setInitialPosition([newLatitude, newLongitude]);
        }
    };

    // Set position in first time
    useEffect(() => {
        if (profile.latitude && profile.longitude) {
            setInitialPosition([profile.latitude, profile.longitude]);
        } else {
            setInitialPosition([36.5969567, 53.0645213]);
        }
    }, [profile]);

    return (
        <div className="w-56 h-56 lg:w-36 lg:h-36 rounded-full overflow-hidden relative shadow-lg">
            <img src={mapPicture} className='w-full h-full' alt="" />
            <div onClick={() => { onOpen() }} className="w-full h-9 cursor-pointer bg-black/60 z-10 absolute bottom-0 left-0 flex justify-center items-center">
                <LocationIcon className="stroke-white w-6 h-6" />
            </div>
            <CreateModal
                isOpen={isOpen}
                onClose={onClose}
                size="4xl"
                bodyStyle="flex flex-row flex-wrap justify-center gap-y-10 py-10 sm:py-20 px-10 sm:px-32 relative"
                scroll={false}
            >
                <div onClick={onClose} className="closeButton_modal bg-neutral-200/65 top-0 right-0">
                    <CloseIcon />
                </div>
                {Object.keys(profile).length !== 0 && profile ? (
                    <LeafletMap center={initialPosition} zoom={13} style={{ zIndex: 9 }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker
                            position={initialPosition}
                            ref={markerRef}
                            draggable
                            eventHandlers={{ dragend: handleMoveMarker }}
                        ></Marker>
                    </LeafletMap>
                ) : (
                    <div>دیتای شما بارگذاری نشده</div>
                )}
                <button
                    onClick={() => {
                        setPosToProfile(initialPosition);
                        onClose()
                    }}
                    className='w-14 h-14 rounded-full bg-white shadow-xl -mt-16 relative flex items-center justify-center'
                    style={{ zIndex: 10 }}
                >
                    <CheckTrueIcon />
                </button>
            </CreateModal>
        </div>
    )
}

export default ChooseAddress
