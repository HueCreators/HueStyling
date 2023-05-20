import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  currentMain: number = 0;
  nextButtonText: string = "Next: Private Information";
  headlineHeader: string = "";
  headlineComment: string = "";

  ngOnInit(): void {
    let els = document.getElementsByClassName('main');
    for(let i = 0; i < els.length; i++) {
      let item = els.item(i);
      if(item) {
        item.classList.remove('mainVisible');
        if(i === this.currentMain) {
          item.classList.add('mainVisible');

          // @ts-ignore
          this.nextButtonText = item.getAttribute('data-next');
          // @ts-ignore
          this.headlineHeader = item.getAttribute('data-header');
          // @ts-ignore
          this.headlineComment = item.getAttribute('data-comment');
        }
      }
    }
  }

  prevPage(): void {
    let els = document.getElementsByClassName('main');
    if(this.currentMain > 0)
      this.currentMain--;
    else
      return;

    for(let i = 0; i < els.length; i++) {
      let item = els.item(i);
      if(item) {
        item.classList.remove('mainVisible');
        if(i === this.currentMain) {
          item.classList.add('mainVisible');

          // @ts-ignore
          this.nextButtonText = item.getAttribute('data-next');
          // @ts-ignore
          this.headlineHeader = item.getAttribute('data-header');
          // @ts-ignore
          this.headlineComment = item.getAttribute('data-comment');
        }
      }
    }
  }

  nextPage(): void {
    let els = document.getElementsByClassName('main');
    if(this.currentMain < els.length-1)
      this.currentMain++;
    else
      return;

    for(let i = 0; i < els.length; i++) {
      let item = els.item(i);
      if(item) {
        item.classList.remove('mainVisible');
        if(i === this.currentMain) {
          item.classList.add('mainVisible');

          // @ts-ignore
          this.nextButtonText = item.getAttribute('data-next');
          // @ts-ignore
          this.headlineHeader = item.getAttribute('data-header');
          // @ts-ignore
          this.headlineComment = item.getAttribute('data-comment');
        }
      }
    }
  }

  onFileChange(event: Event, target: HTMLImageElement) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.item(0);

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        target.src = e.target.result;
      };

      reader.readAsDataURL(file);
    } else {
      target.src = "";
    }
  }
}
