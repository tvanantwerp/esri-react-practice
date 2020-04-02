export const resources = [
  // {
  //   id: 'bikeRoutes',
  //   url:
  //     'https://gis.arlingtonva.us/arlgis/rest/services/public/Bike_Routes/MapServer/4',
  //   outfields: ['*'],
  //   popupTemplate: {
  //     title: 'Bicycle route',
  //     content: 'This is a {Route_Type}.',
  //   },
  // },
  // {
  //   id: 'bikeStations',
  //   url:
  //     'https://gis.arlingtonva.us/arlgis/rest/services/public/Bike_Routes/MapServer/3',
  // },
  // {
  //   id: 'busRoutes',
  //   url:
  //     'https://gis.arlingtonva.us/arlgis/rest/services/public/Bus_Routes/MapServer/1',
  //   outfields: ['*'],
  //   popupTemplate: {
  //     title: 'Bus Route',
  //     content: 'This is the {ID} route.',
  //   },
  // },
  // {
  //   id: 'busStops',
  //   url:
  //     'https://gis.arlingtonva.us/arlgis/rest/services/public/Bus_Routes/MapServer/0',
  // },
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
