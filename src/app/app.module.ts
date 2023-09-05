import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SonyBarComponent } from './components/sony-bar/sony-bar.component';
import { SonyNavSecondariaComponent } from './components/sony-bar/sony-nav-secondaria/sony-nav-secondaria.component';
import { MenuPsnComponent } from './components/menu-psn/menu-psn.component';
import { CardComponent } from './components/card/card.component';
import { LabelCardComponent } from './components/card/label-card/label-card.component';
import { LabelCardValorDescontoComponent } from './components/card/label-card-valor-desconto/label-card-valor-desconto.component';
import { HeaderTitleComponent } from './components/header-title/header-title.component';
import { FooterComponent } from './components/footer/footer.component';
import { ColecoesComponent } from './pages/colecoes/colecoes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SonyBarComponent,
    SonyNavSecondariaComponent,
    MenuPsnComponent,
    CardComponent,
    LabelCardComponent,
    LabelCardValorDescontoComponent,   
    HeaderTitleComponent, FooterComponent, ColecoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
