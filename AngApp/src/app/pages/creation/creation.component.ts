import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {

  dataForm: FormGroup;

  nomCtrl: FormControl;
  prenomCtrl: FormControl;

  constructor(private fb: FormBuilder) {
    this.nomCtrl = fb.control('nom');
    this.prenomCtrl = fb.control('prenom');
    this.dataForm = fb.group({
      nom: this.nomCtrl,
      prenomCtrl: this.prenomCtrl
    });

   }

  ngOnInit() {
  }

  processSubmit() {
    console.log(" ");
    console.log(" ");

  }
}
