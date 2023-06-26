import { Component } from '@angular/core';
import { RendelesService } from '../rendeles.service';

@Component({
  selector: 'app-kosar',
  templateUrl: './kosar.component.html',
  styleUrls: ['./kosar.component.css']
})
export class KosarComponent {
  tetelek:any;
  constructor(private rendeles:RendelesService){
    this.rendeles.getRendeles().subscribe(
      (adatok)=> this.tetelek=adatok
    )
  }

  deleteTetel(tetel:any){
    this.rendeles.deleteTetel(tetel)
  }
  ar(ar:number, mennyiseg:number){
    return Math.round((ar*mennyiseg*100))/100
  }


  osszesen(){
    let sum=0;
  

    for (let i = 0; i < this.tetelek.length; i++) {
      sum += this.ar(this.tetelek[i].aru.ar, this.tetelek[i].mennyiseg)
    }
  

    return Math.round(sum)
  }
}
