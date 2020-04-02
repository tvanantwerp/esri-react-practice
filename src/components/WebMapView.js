import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';
import styled from 'styled-components';

const StyledMapContainer = styled.div`
  height: 100vh;
`;

export const WebMapView = () => {
  // store view in state and create the ref for the containing element
  const mapRef = useRef();

  useEffect(() => {
    const setup = async () => {
      // get ESRI components asynchronously
      const [ArcGISMap, MapView, FeatureLayer, LayerList] = await loadModules(
        [
          'esri/Map',
          'esri/views/MapView',
          'esri/layers/FeatureLayer',
          'esri/widgets/LayerList',
        ],
        { css: true }
      );

      // bail if the ref is bad
      // got idea from https://codesandbox.io/s/jlxz359l9w
      if (!mapRef) return;

      // create map
      const map = new ArcGISMap({
        basemap: 'gray-vector',
      });

      let layers = [];
      const resources = [
        {
          id: 'bikeRoutes',
          url:
            'https://gis.arlingtonva.us/arlgis/rest/services/public/Bike_Routes/MapServer/4',
          outfields: ['*'],
          popupTemplate: {
            title: 'Bicycle route',
            content: 'This is a {Route_Type}.',
          },
        },
        {
          id: 'bikeStations',
          url:
            'https://gis.arlingtonva.us/arlgis/rest/services/public/Bike_Routes/MapServer/3',
        },
        {
          id: 'busRoutes',
          url:
            'https://gis.arlingtonva.us/arlgis/rest/services/public/Bus_Routes/MapServer/1',
          outfields: ['*'],
          popupTemplate: {
            title: 'Bus Route',
            content: 'This is the {ID} route.',
          },
        },
        {
          id: 'busStops',
          url:
            'https://gis.arlingtonva.us/arlgis/rest/services/public/Bus_Routes/MapServer/0',
        },
        {
          id: 'metroRoutes',
          url:
            'https://gis.arlingtonva.us/arlgis/rest/services/public/MetroRail/MapServer/1',
          outfields: ['*'],
          popupTemplate: {
            title: 'Metro Line',
            content: 'This is the {COLOR} line.',
          },
        },
        {
          id: 'metroStations',
          url:
            'https://gis.arlingtonva.us/arlgis/rest/services/public/MetroRail/MapServer/0',
        },
      ];

      resources.forEach(resource => layers.push(new FeatureLayer(resource)));

      map.addMany(layers);

      // create view, specifying map, ref, and other options
      const view = new MapView({
        container: mapRef.current,
        map: map,
        center: [-77.08598828498384, 38.89004910498292],
        zoom: 16,
      });

      // wait for view to load before updating state
      // also got idea from https://codesandbox.io/s/jlxz359l9w
      view.when(() => {
        const layerList = new LayerList({
          view,
        });

        view.ui.add(layerList, {
          position: 'top-right',
        });
      });
    };
    setup();
  }, []);

  return <StyledMapContainer className='webmap' ref={mapRef} />;
};

export default WebMapView;
