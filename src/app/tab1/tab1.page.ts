import { Component } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker, icon } from 'leaflet';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  map: Map;

  ionViewDidEnter() { this.createMap(); }

  createMap() {
    this.map = new Map('mapa').setView([41.8919, 12.5113], 10);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Mirko',
    }).addTo(this.map);


    var greenIcon = icon({
      iconUrl: 'assets/leaf-green.png',
      shadowUrl: 'assets/leaf-shadow.png',

      iconSize:     [38, 95], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    var redIcon = icon({
      iconUrl: 'assets/leaf-red.png',
      shadowUrl: 'assets/leaf-shadow.png',

      iconSize:     [38, 95], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    const markPoint = marker([41.902709, 12.480512],  {icon: greenIcon});
    markPoint.bindPopup('<b>Battery: 60% </b>').addTo(this.map);
    const markPoint2 = marker([41.894916, 12.499945],  {icon: redIcon});
    markPoint2.bindPopup('<b>Battery: 4% </b>').addTo(this.map);
 
  }

  ionViewWillLeave() {
    this.map.remove(); // 
  }
}