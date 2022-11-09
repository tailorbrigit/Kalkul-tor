import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gyepes';
  diameter!:number;
  price!:number;

  calcArea():void{
    let radius = this.diameter/2;
    let area = Math.pow(radius, 2* Math.PI);
    let halfArea = area/2;
    this.price = halfArea * 2500;
    console.log('Működik')
  }
}
