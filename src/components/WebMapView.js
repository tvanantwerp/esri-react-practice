import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';

export const WebMapView = () => {
  // create the ref for the containing element
  const mapRef = useRef();

  useEffect(() => {
    const setup = async () => {
      // get ESRI components asynchronously
      const [ArcGISMap, MapView] = await loadModules(
        ['esri/Map', 'esri/views/MapView'],
        { css: true }
      );
      // do stuff
    };
    setup();

    return () => {
      // cleanup something
    };
  }, []);

  return <div className='webmap' ref={mapRef} />;
};

export default WebMapView;
