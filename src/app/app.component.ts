import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularApp';
  imageUrl = '../assets/BL_logo_square_png.png';
  
  ngOnInit() {
    console.log('App Component');
    this.title = 'Hello From Bridgelabz';
  }
}
