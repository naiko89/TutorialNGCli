import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { CarrelloService } from '../carrello.service';


@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {

  oggetti;
  cassa = new FormGroup({});
  vuoto: boolean;

  constructor(private carrelloS: CarrelloService, private form: FormBuilder) {
    this.cassa = this.form.group({
      nome: ['', Validators.required ],
      cognome: ['', Validators.required ],
      indirizzo: ['', Validators.required ]
    });
  }

  ngOnInit(): void {
    this.oggetti = this.carrelloS.prendiElementi();
    console.log(this.oggetti);
    if (this.oggetti.length)
    { this.vuoto = !this.vuoto; }
  }
  rimuoviOggetto(Id: number): void{
    this.carrelloS.eliminaElemento(Id);
  }

  onSubmit(): void {
    this.oggetti = this.carrelloS.pulisciCarrello();
    window.alert('Il tuo ordine è stato fatto è stato eseguito');
    this.cassa.reset();
  }

}
