import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { ListaProdottiComponent } from './lista-prodotti/lista-prodotti.component';
import { TopMenubarComponent } from './top-menubar/top-menubar.component';
import { ProdottoAlertComponent } from './prodotto-alert/prodotto-alert.component';
import { DettagliProdottoComponent } from './dettagli-prodotto/dettagli-prodotto.component';
import { CarrelloComponent } from './carrello/carrello.component';


@NgModule({
  declarations: [
    AppComponent,
    TopMenubarComponent,
    ListaProdottiComponent,
    ProdottoAlertComponent,
    DettagliProdottoComponent,
    CarrelloComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: ListaProdottiComponent },
      { path: 'prodotti/:prodottoID/:ID', component: DettagliProdottoComponent },
      { path: 'carrello', component: CarrelloComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
