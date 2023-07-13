import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  public selectedNumberImage = 1;



  public onSelect(slider: number) {
    this.selectedNumberImage = slider;
  }

}
