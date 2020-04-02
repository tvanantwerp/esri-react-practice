import React, { useState, useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';
import styled from 'styled-components';

import { resources } from '../config';

const StyledMapContainer = styled.div`
  height: 100vh;
`;

let metroLinesLayer = null;

function toggleMetroLineDisplay(values) {
  if (metroLinesLayer) {
    const joinedValues = values.filter(value => value.length > 0).join(',');
    const query =
      joinedValues.length > 0 ? `GRADE IN (${joinedValues})` : '1=2';
    console.log(query);
    metroLinesLayer.definitionExpression = query;
  }
}

export const WebMapView = () => {
  // store view in state and create the ref for the containing element
  const mapRef = useRef();
  const [above, setAbove] = useState("'above'");
  const [below, setBelow] = useState("'below'");

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

      const layers = resources.map(resource => new FeatureLayer(resource));
      metroLinesLayer = layers.find(layer => layer.id === 'metroRoutes');

      map.addMany(layers);

      // create view, specifying map, ref, and other options
      const view = new MapView({
        container: mapRef.current,
        map: map,
        center: [-77.08598828498384, 38.89004910498292],
        zoom: 12,
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

  useEffect(() => {
    toggleMetroLineDisplay([above, below]);
  }, [above, below]);

  return (
    <>
      <input
        type='checkbox'
        checked={above === "'above'" ? true : false}
        onChange={() => {
          setAbove(above === "'above'" ? '' : "'above'");
        }}
        id='above'
      />
      <input
        type='checkbox'
        checked={below === "'below'" ? true : false}
        onChange={() => {
          setBelow(below === "'below'" ? '' : "'below'");
        }}
        id='below'
      />
      <StyledMapContainer className='webmap' ref={mapRef} />
    </>
  );
};

export default WebMapView;
