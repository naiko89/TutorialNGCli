import { Component, OnInit } from '@angular/core';
import { prodotti } from '../prodotti';
import { cancelleria } from '../cancelleria';
import { attrezzi } from '../attrezzi';

@Component({
  selector: 'app-lista-prodotti',
  templateUrl: './lista-prodotti.component.html',
  styleUrls: ['./lista-prodotti.component.css'],
  styles : ['button {margin-top: 2px;}']
})
export class ListaProdottiComponent {

  prodotti = [prodotti, cancelleria, attrezzi];

  condividi(nome: string): void {
    window.alert('Il prodotto ' + nome + ' è stato condiviso ');
  }
  notificami(nome: string): void{
    window.alert('Sarai avvisato quando il prodotto ' + nome + ' sarà disponibile');
  }
}
