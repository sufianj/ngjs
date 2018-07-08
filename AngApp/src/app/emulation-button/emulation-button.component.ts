import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emulation-button',
  templateUrl: './emulation-button.component.html',
  styleUrls: ['./emulation-button.component.css']
})
export class EmulationButtonComponent implements OnInit {

  @Output()
  evtClick = new EventEmitter<string>();

  @Input()
  label: string="Button";

  @HostListener('click', ['$event.target', 'toto'])
  innerClick(btn, tt: string) {
    console.log('click dans emu' + tt);
    this.evtClick.emit(new Date().toDateString());
  }

  @HostListener('mouseover')
  innerMsOver() {
    console.log('mouseover');
  }

  @HostListener('mouseleave')
  innerMsLeave() {
    console.log('mouseleave');
  }

  constructor() { }

  ngOnInit() {
  }

}
