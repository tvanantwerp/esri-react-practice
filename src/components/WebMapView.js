import React, { useState, useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';

export const WebMapView = () => {
  // store view in state and create the ref for the containing element
  const [view, setView] = useState(null);
  const mapRef = useRef();

  useEffect(() => {
    const setup = async () => {
      // get ESRI components asynchronously
      const [ArcGISMap, MapView] = await loadModules(
        ['esri/Map', 'esri/views/MapView'],
        { css: true }
      );

      // bail if the ref is bad
      // got idea from https://codesandbox.io/s/jlxz359l9w
      if (!mapRef) return;

      // create map
      const map = new ArcGISMap({
        basemap: 'topo-vector',
      });

      // create view, specifying map, ref, and other options
      const view = new MapView({
        container: mapRef.current,
        map: map,
        center: [-77.091, 38.8816],
        zoom: 8,
      });

      // wait for view to load before updating state
      // also got idea from https://codesandbox.io/s/jlxz359l9w
      view.when(() => {
        setView(view);
      });
    };
    setup();

    return () => {
      setView(null);
    };
  }, []);

  return <div className='webmap' ref={mapRef} />;
};

export default WebMapView;
