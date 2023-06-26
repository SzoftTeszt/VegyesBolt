import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VegyesBoltWebshop';
  kategoria:any;
  
  kategoriaValtas(kategoria:any){
    this.kategoria=kategoria;
  }
}
