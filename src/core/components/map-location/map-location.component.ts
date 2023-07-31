import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

const monterrey: L.LatLngExpression = [25.6558881, -100.2644069];


@Component({
  selector: 'app-map-location',
  templateUrl: './map-location.component.html',
  styleUrls: ['./map-location.component.css']
})


export class MapLocationComponent {

  private marker: L.Marker | undefined;

  constructor() {

  }

  ngAfterViewInit() {
    const map: any = L.map('map').setView(monterrey, 10);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const options: L.MarkerOptions = {
      icon: L.icon({
        iconSize: [40, 40],
        iconUrl: './assets/images/map-icon.jpg',
      }),
    };

    map.on('click', (e: L.LeafletMouseEvent) => this.onMapClick(e, map, options));
  }

  onMapClick(e: L.LeafletMouseEvent, map: L.Map, options: L.MarkerOptions) {
    if (this.marker){
        this.marker.setLatLng(e.latlng);
    } else {
      this.marker = L.marker(e.latlng, options);
      this.marker.addTo(map);
    }
  }
  
}

