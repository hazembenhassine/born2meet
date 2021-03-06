import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PremiumComponent } from './pages/premium/premium.component';
import { SubscribeComponent } from './pages/premium-content/subscribe/subscribe.component';
import { PremiumContentComponent } from './pages/premium-content/premium-content.component';
import { BasketComponent } from './pages/premium-content/basket/basket.component';
import { PackComponent } from './pages/premium-content/pack/pack.component';
import { LoadingComponent } from './pages/premium-content/loading/loading.component';
import { ChatListComponent } from './pages/premium-content/chat-list/chat-list.component';
import { TruthComponent } from './pages/premium-content/truth/truth.component';
import { TruthResolver } from './core/resolvers/truth.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'premium',
    component: PremiumComponent
  },
  {
    path: 'premium',
    component: PremiumContentComponent,
    children: [
      {
        path: 'subscribe',
        component: SubscribeComponent
      },
      {
        path: 'basket',
        component: BasketComponent
      },
      {
        path: 'pack',
        component: PackComponent
      },
      {
        path: 'loading',
        component: LoadingComponent
      },
      {
        path: 'chat-list',
        component: ChatListComponent
      },
      {
        path: 'truth',
        component: TruthComponent,
        resolve: {
          compatibility: TruthResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
