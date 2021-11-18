import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { MenusecundarioComponent } from './components/menusecundario/menusecundario.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    MenusecundarioComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  exports: [
    MenuPrincipalComponent,
    MenusecundarioComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
