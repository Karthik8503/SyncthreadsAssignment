import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import Cookies from 'js-cookie';
import Header from '../Header';
import 'leaflet/dist/leaflet.css';
import './index.css'

const ZoomControl = () => {
    const map = useMap();
  
    return (
      <div className="zoom-control">
        <button onClick={() => map.setZoom(map.getZoom() + 1)}>Zoom In</button>
        <button onClick={() => map.setZoom(map.getZoom() - 1)}>Zoom Out</button>
      </div>
    );
  };

const MapView = () => {
  const [mapData, setMapData] = useState({ center: [20.5937, 78.9629], zoom: 5 });

//  useEffect(() => {
//     const fetchData = async () => {
//         const jwtToken = Cookies.get('jwt_token');
//         const options = {
//             headers: {
//             Authorization: `Bearer ${jwtToken}`,
//             },
//             method: "GET",
//         };
//         const response = await fetch('http://localhost:5000/api/map', options);
//         const data = await response.json();
//         if (response.ok === true){
//             setMapData(data);
//         }      
//     };
//     fetchData();
//   }, []);

  return (
    <div className="map-cont">
        <Header />
        <MapContainer center={mapData.center} zoom={mapData.zoom} style={{ height: '100vh', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <ZoomControl />
        </MapContainer>
    </div>
  );
};

export default MapView;