import { Directive, ElementRef , Renderer2, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[infoPourLeComponentHost]'
})
export class InfoPourLeComponentHostDirective {

  @Input('infoPourLeComponentHost') infoMessage: string;

  constructor(private element: ElementRef,
              private renderer: Renderer2) { }

}
