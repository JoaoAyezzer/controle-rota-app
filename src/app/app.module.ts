import { TecnicoService } from './services/domain/tecnico.service';
import { TabsNavigationPageModule } from './pages/tabs-navigation/tabs-navigation.module';
import { StorageService } from './services/storage.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptorProvider } from './interceptors/auth-interceptor';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule, 
    IonicModule.forRoot(),
    AppRoutingModule,
    TabsNavigationPageModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService,
    StorageService,
    TecnicoService,
    AuthInterceptorProvider
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}