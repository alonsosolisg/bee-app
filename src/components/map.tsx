// @ts-nocheck

"use client";

import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Circle } from "react-leaflet";
import { LatLngExpression, LatLngTuple } from "leaflet";

export function Map() {
  const position: LatLngTuple = [59.437, 24.7536];

  return (
    <div className="relative w-full rounded-lg border bg-card text-card-foreground shadow z-10">
      <div>
        <MapContainer
          center={position as LatLngExpression}
          zoom={14}
          scrollWheelZoom={false}
          style={{
            height: "300px",
            width: "100%",
            borderRadius: "0.375rem",
            zIndex: 10,
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Circle
            center={position}
            radius={50}
            pathOptions={{
              color: "hsl(var(--accent))",
              fillColor: "hsl(var(--accent))",
              fillOpacity: 0.8,
            }}
          />
          <Circle
            center={position}
            radius={2000}
            pathOptions={{
              color: "hsl(var(--accent))",
              fillColor: "hsl(var(--accent))",
              fillOpacity: 0.2,
            }}
          />
        </MapContainer>
      </div>
    </div>
  );
}
