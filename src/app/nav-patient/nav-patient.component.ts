import {Component} from '@angular/core';

@Component({
  selector: 'app-nav-patient',
  templateUrl: './nav-patient.component.html',
  styleUrls: ['./nav-patient.component.css']
})
export class NavPatientComponent  {
  searchIsVisible = true;

  searchToggleVisible() {
    this.searchIsVisible = !this.searchIsVisible;
  }

}
