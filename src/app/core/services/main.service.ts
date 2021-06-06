import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getCompatibility(body: any): Promise<any> {
    return this.http.post(`${environment.BASE_URL}/api/compatibility`, JSON.stringify(body)).toPromise();
  }

}
