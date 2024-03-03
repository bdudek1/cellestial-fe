import React from 'react';
import styled from 'styled-components';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const StyledMapContainer = styled(MapContainer)`
  height: 40vh;
  width: 800px;
  margin: 0 auto;
  border-radius: 15px;
  z-index: 0;

  @media (max-width: 992px) {
    width: 97%;
  }
`;

const customIcon = new L.Icon({
  iconUrl:
    'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export type Position = { lat: number; lng: number };
export interface MapProps {
  position: Position;
  setPosition: (position: Position) => void;
}

const PositionMarker = ({ position, setPosition }: MapProps) => {
  useMapEvents({
    click: (e) => {
      setPosition(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={customIcon}>
      <Popup>Your star gazing position.</Popup>
    </Marker>
  );
};

export const Map = ({ position, setPosition }: MapProps) => {
  return (
    <StyledMapContainer center={[52, 21]} zoom={6}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <PositionMarker position={position} setPosition={setPosition} />
    </StyledMapContainer>
  );
};
