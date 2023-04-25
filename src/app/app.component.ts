import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NgEnvironment } from 'src/environments/environment.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-env-variables';
  evn: NgEnvironment = environment.env;
}
