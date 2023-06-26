import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private kategoriak = [
    "BBQ","Zöldség, gyümölcs","Tejtermékek, tojás","Pékáru","Hús, hal, felvágott","Alapvető élelmiszerek","Speciális és egészséges táplálkozás","Fagyasztott élelmiszerek","Italok","Alkohol","Háztartás","Szépségápolás","Babaápolás","Kisállat","Otthon, hobbi","Ruházat"
  ]
  private suly:any=[];

  pushSuly(){
    for (let i = 0.2; i <= 3.1; i=i+0.1) {
      this.suly.push(Math.round(i*10)/10);      
    }
  }
  getSuly(){
    return this.suly;
  }

  constructor() {
    this.pushSuly();
   }

  getKategoriak(){
    return this.kategoriak;
  }
}
