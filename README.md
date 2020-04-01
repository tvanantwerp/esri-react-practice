# ESRI React Practice

## Objective

Develop a simple mapping web application that uses React and the ArcGIS API for JavaScript.

## Goals
- Using Create React App create a new app.
- Using [esri-loader](https://github.com/Esri/esri-loader) to add a map to the app.
- Use React to add components that affect the map.
- Using the [Esri’s JavaScript API](https://developers.arcgis.com/javascript/latest/api-reference/index.html):
  - Add a FeatureLayer to the map.
  - Add functionality to toggle the layers visibility.
  - Add functionality to filter features displayed from the layer.
- Use git to keep track of your revision history.

Optional – Stretch Goals
- Use the TypeScript CRA template
  - *Tom's note*: I will choose not to use TypeScript for this. I've dipped my toes into the TypeScript waters on a few occasions. I'm sure it solves some important problems for some developers, but in my projects it usually just introduced new ones. For the sake of getting this done quickly, I'll skip it.
- Add an out of the box Esri Widget to the map
- Add features to the map from GeoJSON

Resources/Hints
- [Docs](https://developers.arcgis.com/javascript/latest/guide/react/) specific to React and esri-loader.
- There are properties that you can set on a FeatureLayer to apply filters.
- A public source of data of [Arlington Bikes](https://gis.arlingtonva.us/arlgis/rest/services/public/Bike_Routes/MapServer)