import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-limit',
  templateUrl: './map-limit.component.html',
  styleUrls: ['./map-limit.component.css']
})
export class MapLimitComponent {


  ngAfterViewInit() {
    const map: any = L.map('map').setView([25.6558881, -100.2644069], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    L.marker([25.6558881, -100.2644069]).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
  }

}
