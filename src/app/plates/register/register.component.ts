import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor() {}

  currentMain: number = 0;
  nextButtonText: string = "Next: Private Information";
  headlineHeader: string = "";
  headlineComment: string = "";
  nextDisabled: boolean = false;

  ngOnInit(): void {
    let els = document.getElementsByClassName('main');
    for(let i = 0; i < els.length; i++) {
      let item = els.item(i);
      if(item) {
        item.classList.remove('visible');
        if(i === this.currentMain) {
          item.classList.add('visible');

          // @ts-ignore
          this.nextButtonText = item.getAttribute('data-next');
          // @ts-ignore
          this.headlineHeader = item.getAttribute('data-header');
          // @ts-ignore
          this.headlineComment = item.getAttribute('data-comment');
        }
      }
    }

    for(let i = 0; i < els.length; i++) {
      let item = els.item(i);
      if(item) {
        let children = item.querySelectorAll('input');
        this.validator(children, i);

        children.forEach(child => {
          child.addEventListener('input', () => {
            this.validator(children, i);
          });
        })
      }
    }
  }

  validator(inputs: NodeListOf<HTMLInputElement>, index: number): void {
    let valid = true;
    inputs.forEach(inp => {
      if(!inp.validity.valid) {
        valid = false;
        return;
      }
    })

    this.nextDisabled = !valid;
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
        item.classList.remove('visible');
        if(i === this.currentMain) {
          item.classList.add('visible');

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
        item.classList.remove('visible');
        if(i === this.currentMain) {
          {
            item.classList.add('visible');
            this.validator(item.querySelectorAll('input'), i);
          }

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

  onInputChange(event: Event) {
    console.log(event);
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
