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
  userName = '';
  nameError = '';
  
  ngOnInit() {
    console.log('App Component');
    this.title = 'Hello From Bridgelabz';

  }

  onClick($event: MouseEvent) {
    console.log('Button Clicked',$event);
    window.open(this.url, "_blank");
  }

  onInput($event: Event) {
    console.log('Input Event',$event);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError = '';
      return;
    }
    this.nameError = 'Name is Incorrect';
  }
}
