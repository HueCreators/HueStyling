import { Component } from '@angular/core';
import {provideRoutes, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-proj';
  constructor(readonly router: Router) {
  }
}
