import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularApp';
  imageUrl = '../assets/BL_logo_square_png.png';
  url = 'https://www.bridgelabz.com/';
  
  ngOnInit() {
    console.log('App Component');
    this.title = 'Hello From Bridgelabz';

  }

  onClick($event: MouseEvent) {
    console.log('Button Clicked',$event);
    window.open(this.url, "_blank");
  }
}
