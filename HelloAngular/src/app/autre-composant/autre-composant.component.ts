import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-autre-composant',
  templateUrl: './autre-composant.component.html',
  styleUrls: ['./autre-composant.component.css']
})
export class AutreComposantComponent implements OnInit {

  constructor(private modalService: BsModalService) { }
  compteur: number = 0;
  modalRef: BsModalRef;
  typeAlert = 'success';

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit() {
  }

  increment() {
    this.compteur++;
  }
  changeTypeAlert() {
    if (this.typeAlert === 'info') {
      this.typeAlert = 'warning';
    } else {
      this.typeAlert = 'info';
    }
  }
}
