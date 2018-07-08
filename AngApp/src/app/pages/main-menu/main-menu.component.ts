import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MenuItem } from '../../rootclass/InfoMenu/menu-item';
import { ComServiceService } from '../../services/comservice/com-service.service';
import { InfoPourLeComponentHostDirective } from '../../info-pour-le-component-host.directive';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
  providers: [ComServiceService]
})
export class MainMenuComponent implements OnInit , AfterViewInit {

  infoDeLaDirective: string = '';


  @ViewChild(InfoPourLeComponentHostDirective) infoApp: InfoPourLeComponentHostDirective;

  @Input()
  infosMenu: Array<MenuItem> = [];
  constructor(private _com: ComServiceService) { }
  @Input()
  zoneInputText = 'il n\'y a rien';
  ngOnInit() {
  }

  sendEcho() {
    this._com.echoCall(this.zoneInputText).subscribe((ret: string) => {
                      console.log(ret);
                      this.zoneInputText = ret;
                      }, (error: any) => {
                        console.log(error);
                      });
  }

  fctEvtClick(dt: string) {
    this.zoneInputText = dt;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.infoDeLaDirective = this.infoApp.infoMessage;
    }, 1);
  }
}
