import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormulariosService {

  constructor( private httpClient: HttpClient ) { }

  get(url: string) {
    console.log(environment.API_URL + url);
    return this.httpClient.get(environment.API_URL + url);
  }

  post(url: string, data: any) {
    return this.httpClient.post(environment.API_URL + url, data);
  }


  put(url: string, data: any) {
    return this.httpClient.put(environment.API_URL + url, data);
  }

  delete(url: string) {
    return this.httpClient.delete(environment.API_URL + url);
  }
}
