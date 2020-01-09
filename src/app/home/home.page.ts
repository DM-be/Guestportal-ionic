import { Component } from '@angular/core';
import { VisiteeAutoCompleteService } from '../services/visitee-auto-complete.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public visiteeAutoCompleteService: VisiteeAutoCompleteService) {}

}
