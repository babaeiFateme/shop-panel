import { Marker, Popup, useMapEvents } from 'react-leaflet'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import L from 'leaflet'

import 'leaflet/dist/leaflet.css'
const DMap = ({ value, onChange }) => {
    const customIcon = L.icon({
        iconUrl: '/images/locationIcon.png', // Path to your custom icon image
        iconSize: [20, 32],
        iconAnchor: [16, 32],
    })

    const getLocation = (e) => {
        if (e.latlng) {
            const { lat, lng } = e.latlng
            onChange([lat, lng])
        }
    }

    const MapClickHandler = ({ onClick }) => {
        // eslint-disable-next-line no-unused-vars
        const map = useMapEvents({
            click: onClick,
        })
        return null
    }
    return (
        <div>
            <MapContainer
                style={{ height: '400px' }}
                center={value.length ? value : [35.715298, 51.404343]}
                minZoom={3}
                maxZoom={18}
                zoom={5}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                {value.length && (
                    <Marker position={value} icon={customIcon}>
                        <Popup>
                            Latitude: {value[0]}
                            <br />
                            Longitude: {value[1]}
                        </Popup>
                    </Marker>
                )}
                <MapClickHandler onClick={getLocation} />
            </MapContainer>
        </div>
    )
}

export default DMap
