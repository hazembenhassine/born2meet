import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { MainService } from '../services/main.service';

@Injectable({
  providedIn: 'root'
})
export class TruthResolver implements Resolve<any>{

  constructor(private api: MainService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    if (route.queryParams.dates) {
      return this.api.getCompatibility(JSON.parse(route.queryParams.dates));
    } else {
      return this.router.navigateByUrl('/premium');
    }
  }
}
