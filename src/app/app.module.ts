import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PremiumComponent } from './pages/premium/premium.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { SubscribeComponent } from './pages/premium-content/subscribe/subscribe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PremiumContentComponent } from './pages/premium-content/premium-content.component';
import { BasketComponent } from './pages/premium-content/basket/basket.component';
import { PackComponent } from './pages/premium-content/pack/pack.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LoadingComponent } from './pages/premium-content/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PremiumComponent,
    SubscribeComponent,
    PremiumContentComponent,
    BasketComponent,
    PackComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    NgbModule,
    BrowserAnimationsModule,
    MatSelectModule,
    CarouselModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
