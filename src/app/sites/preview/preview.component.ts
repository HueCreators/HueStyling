import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  name: string = this.router.url.slice(9, this.router.url.length);
  route: string = "/plates/" + this.name;

  constructor(readonly router: Router) {

  }

  ngOnInit(): void {

  }

}
