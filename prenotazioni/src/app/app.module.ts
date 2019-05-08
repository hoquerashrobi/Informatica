import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooComponent } from './foo/foo.component';
import { PrenotazioniInformazioniComponent } from './prenotazioni-informazioni/prenotazioni-informazioni.component';
import { InformazioniPrenotazioneComponent } from './informazioni-prenotazione/informazioni-prenotazione.component';

@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    PrenotazioniInformazioniComponent,
    InformazioniPrenotazioneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
