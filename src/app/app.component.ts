import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Empty-Project';
  nombtn = ""
  lista: string [] = []

  btn1(){
    this.nombtn = "Button 1"
    this.lista.push(this.nombtn)
  }
  btn2(){
    this.nombtn = "Button 2"
    this.lista.push(this.nombtn)
  }
  btn3(){
    this.nombtn = "Button 3"
    this.lista.push(this.nombtn)
  }
  btn4(){
    this.nombtn = "Button 4"
    this.lista.push(this.nombtn)
  }

}
