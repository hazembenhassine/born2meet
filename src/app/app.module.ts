import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PremiumComponent } from './pages/premium/premium.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SubscribeComponent } from './pages/premium-content/subscribe/subscribe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PremiumContentComponent } from './pages/premium-content/premium-content.component';
import { BasketComponent } from './pages/premium-content/basket/basket.component';
import { PackComponent } from './pages/premium-content/pack/pack.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LoadingComponent } from './pages/premium-content/loading/loading.component';
import { ChatListComponent } from './pages/premium-content/chat-list/chat-list.component';
import { TruthComponent } from './pages/premium-content/truth/truth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiHeaderInterceptor } from './core/services/api-header.interceptor';
import { MatDialogModule } from '@angular/material/dialog';
import { PaymentModalComponent } from './pages/modals/payment-modal/payment-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PremiumComponent,
    SubscribeComponent,
    PremiumContentComponent,
    BasketComponent,
    PackComponent,
    LoadingComponent,
    ChatListComponent,
    TruthComponent,
    PaymentModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    NgbModule,
    BrowserAnimationsModule,
    MatSelectModule,
    CarouselModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiHeaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
