import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { prodotti } from '../prodotti';
import { cancelleria } from '../cancelleria';
import { attrezzi } from '../attrezzi';
import { CarrelloService } from '../carrello.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dettagli-prodotto',
  templateUrl: './dettagli-prodotto.component.html',
  styleUrls: ['./dettagli-prodotto.component.css']
})
export class DettagliProdottoComponent implements OnInit {
  prodotto;
  prod = [prodotti, cancelleria, attrezzi];
  FormTaglie = new FormGroup({});
  public isCollapsed = true;
  constructor(private route: ActivatedRoute, private carrelloS: CarrelloService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(parametro => {
      this.prodotto = this.prod[+parametro.get('ID')][+parametro.get('prodottoID')];
      this.FormTaglie = new FormGroup({
        taglia : new FormControl('', Validators.required )
      });
    });
  }
  aggiungiCarrello(prodotto: any): void {
    // prodotto.taglie = this.FormTaglie.get('taglia'); this.FormTaglie.get('taglia')
    // + JSON.stringify(prodotto.taglie)
    this.prodotto.taglOrd = this.FormTaglie.get('taglia').value;
    this.carrelloS.aggiungiAlCarrello(this.prodotto);
  }

}
