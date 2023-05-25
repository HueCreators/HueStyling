import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor() {}

  @ViewChild('envelope') envelope: ElementRef | undefined;
  @ViewChild('promo') promo: ElementRef | undefined;

  currentMain: number = 0;
  nextButtonText: string = "Next: Private Information";
  headlineHeader: string = "";
  headlineComment: string = "";
  nextDisabled: boolean = true;

  ngOnInit(): void {
    this.changePage();

    let els = document.getElementsByClassName('main');
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
    if(this.currentMain !== index)
      return;

    let valid = true;
    inputs.forEach(inp => {
      if(!inp.validity.valid) {
        valid = false;
      }
    })

    this.nextDisabled = !valid;
  }

  changePage(target: number = 0): void {
    let els = document.getElementsByClassName('main');
    if(this.currentMain >= 0 || this.currentMain < els.length - 1)
      this.currentMain = target;
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
            if(item.getAttribute('data-done')) {
              this.envelope?.nativeElement.classList.add('done');
              this.promo?.nativeElement.classList.add('done');

              setTimeout(() => {
                this.envelope?.nativeElement.classList.remove('done');
                this.promo?.nativeElement.classList.remove('done');
                this.changePage(1);
              }, 1000 * 5)
            }
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
