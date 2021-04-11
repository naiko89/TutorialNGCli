import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {

  elementi = [];

  constructor(private http: HttpClient) { }

  aggiungiAlCarrello(prodotto): void
  {this.elementi.push(prodotto);
  }
  prendiElementi(): any
  {return this.elementi;
  }
  eliminaElemento(Id: number): void
  {this.elementi.forEach((val, id) => {
      if (id === Id) this.elementi.splice(id,1);
    });
  }
  pulisciCarrello(): any
  {this.elementi = [];
   return this.elementi;
  }
  getCostiSpedizione(): any
  {return this.http.get('/assets/spedizione.json');
  }
}
