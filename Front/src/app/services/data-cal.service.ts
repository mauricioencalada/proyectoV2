
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { AuthService } from './auth.service';
import { CalificaionInterface } from '../models/cali-interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataCalService {
  calificaciones: Observable<any>;
  calificacion: Observable<any>;


  constructor(private http: HttpClient , private authService: AuthService) { }

  public selectedGroup: CalificaionInterface = {
    note1: 0,
    note2: 0,
    note3: 0,
    noteEnd: 0,
    description: '',
    };

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: this.authService.getToken()
  });

  getAllForms() {
    const url_api = `http://localhost:8000/api/quialifications`;
    return this.http.get(url_api);
  }

  getById(id: string) {
    const url_api = `http://localhost:8000/api/qualification`;
    return (this.calificacion = this.http.get(url_api));
  }

  saveGroup(cal: CalificaionInterface) {
    // TODO: obtener token
    // TODO: not null
    const token = this.authService.getToken();
    const url_api = `http://127.0.0.1:8000/api/qualification`;
    return this.http
      .post<CalificaionInterface>(url_api, cal, { headers: this.headers })
      .pipe(map(data => data));
  }
  updateGroup(cal) {
    // TODO: obtener token
    // TODO: not null

    const groupId = cal.calId;
    const token = this.authService.getToken();
    const url_api = `http://127.0.0.1:8000/api/qualification`;
    return this.http
      .put<CalificaionInterface>(url_api, cal, { headers: this.headers })
      .pipe(map(data => data));
  }


  deleteGroup(id: string) {
    // TODO: obtener token
    // TODO: not null
    const token = this.authService.getToken();
    console.log(token);
    const url_api = `http://localhost:8000/api/qualification/${id}/?access_token=${token}`;
    return this.http
      .delete<CalificaionInterface>(url_api, { headers: this.headers })
      .pipe(map(data => data));
  }
}
