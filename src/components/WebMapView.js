import React, { useState, useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';
import styled from 'styled-components';

const StyledMapContainer = styled.div`
  height: 100vh;
`;

export const WebMapView = () => {
  // store view in state and create the ref for the containing element
  const [view, setView] = useState(null);
  const mapRef = useRef();

  useEffect(() => {
    const setup = async () => {
      // get ESRI components asynchronously
      const [ArcGISMap, MapView, FeatureLayer] = await loadModules(
        ['esri/Map', 'esri/views/MapView', 'esri/layers/FeatureLayer'],
        { css: true }
      );

      // bail if the ref is bad
      // got idea from https://codesandbox.io/s/jlxz359l9w
      if (!mapRef) return;

      // create map
      const map = new ArcGISMap({
        basemap: 'topo-vector',
      });

      const bikeshareStations = new FeatureLayer({
        url:
          'https://gis.arlingtonva.us/arlgis/rest/services/public/Bike_Routes/MapServer/3',
      });

      const bikeRoutes = new FeatureLayer({
        url:
          'https://gis.arlingtonva.us/arlgis/rest/services/public/Bike_Routes/MapServer/4',
      });

      map.add(bikeRoutes);
      map.add(bikeshareStations);

      // create view, specifying map, ref, and other options
      const view = new MapView({
        container: mapRef.current,
        map: map,
        center: [-77.091, 38.8816],
        zoom: 13,
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

  return <StyledMapContainer className='webmap' ref={mapRef} />;
};

export default WebMapView;
