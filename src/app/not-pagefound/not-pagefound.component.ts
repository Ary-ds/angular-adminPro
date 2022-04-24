import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-pagefound',
  templateUrl: './not-pagefound.component.html',
  styleUrls: [
    './not-pagefound.component.css',
  ]
})
export class NotPagefoundComponent {

//se crea la fecha actual 
  year = new Date().getFullYear();


}
