
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { organizations } from "../../data/organizations";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default function OrganizationsMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current, {
      scrollWheelZoom: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    const markerIcon = L.divIcon({
      className: "organization-map-marker",
      html: `
        <div style="
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #2563eb;
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.35);
        "></div>
      `,
      iconSize: [22, 22],
      iconAnchor: [11, 11],
    });

    const positions: [number, number][] = [];

    organizations.forEach((organization) => {
      const position: [number, number] = [
        organization.latitude,
        organization.longitude,
      ];

      positions.push(position);

      const marker = L.marker(position, {
        icon: markerIcon,
      }).addTo(map);

      const popupContent = `
        <div style="min-width: 180px">
          <strong>${escapeHtml(organization.nome)}</strong>
          <p style="margin: 6px 0">
            ${escapeHtml(organization.cidade)}
          </p>
          <a
            href="/organizacoes/${organization.id}"
            style="color: #2563eb; font-weight: 600"
          >
            Ver perfil →
          </a>
          <br />
          <a
            href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(organization.endereco)}"
            target="_blank"
            rel="noopener noreferrer"
            style="display: inline-block; margin-top: 6px"
          >
            Abrir no Google Maps
          </a>
        </div>
      `;

      marker.bindPopup(popupContent);
    });

    if (positions.length > 0) {
      map.fitBounds(L.latLngBounds(positions), {
        padding: [40, 40],
        maxZoom: 13,
      });
    } else {
      map.setView([-30.0346, -51.2177], 12);
    }

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="relative z-0 h-[420px] w-full"
      aria-label="Mapa interativo das organizações do Vozes da Rua"
    />
  );
}
