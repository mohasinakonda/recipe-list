import { Directive, ElementRef, OnInit } from '@angular/core';
@Directive({
  selector: '[appStyle]',
})
export class CustomDirective implements OnInit {
  constructor(private elementStyle: ElementRef) {}
  ngOnInit(): void {
    this.elementStyle.nativeElement.style.backgroundColor = 'green';
  }
}
