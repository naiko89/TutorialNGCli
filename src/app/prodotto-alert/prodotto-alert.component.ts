import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prodotto-alert',
  templateUrl: './prodotto-alert.component.html',
  styleUrls: ['./prodotto-alert.component.css'],
  styles : ['button {margin-top: 2px;}']
})
export class ProdottoAlertComponent implements OnInit {

  constructor() { }
  @Input() prodottoA;
  @Output() notifica = new EventEmitter();
  ngOnInit(): void {
    //window.alert(JSON.stringify(this.prodottoA));
  }
  condividi(val: string): void{
   window.alert('sei dentro il condividimi');
  }

}
