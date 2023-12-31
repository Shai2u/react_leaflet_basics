import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';

export default function Map({init_lat, init_lng, init_zoom}) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(init_lng);
    const [lat] = useState(init_lat);
    const [zoom] = useState(init_zoom);
    const [API_KEY] = useState('khvVGD9ThOCYQHMkBNt5');

    useEffect(() => {
        if (map.current) return; // stops map from intializing more than once
      
        map.current = new maplibregl.Map({
          container: mapContainer.current,
          style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
          center: [lng, lat],
          zoom: zoom
        });

        map.current.addControl(new maplibregl.NavigationControl(), 'top-left');
        new maplibregl.Marker({color: "#FF0000"})
          .setLngLat([init_lng,init_lat])
          .addTo(map.current);
      }, [API_KEY, lng, lat, zoom]);

      return (
        <div className="map-wrap">
          <div ref={mapContainer} className="map" />
        </div>
      );

  }