import { Component } from '@angular/core';
import { DataService } from './services/data.service'
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <input type="text" [(ngModel)]="message"/>
  <input type="button" value="Send ws msg" (click)="sendMsg()"/>`,
})
export class AppComponent  { 
  name: string; 

  message: string;

  constructor( private dataService: DataService ){
    dataService.messages.subscribe(msg => {
            this.name = msg;
        });
  }

  sendMsg() {
		console.log('new message from client: ', this.message);
		this.dataService.messages.next(this.message);
	}
}
