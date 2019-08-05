import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { QualificationInterface } from '../models/qualification-interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QualificationService {

  constructor(private http: HttpClient, private authService: AuthService) { }
  qualifications: Observable<any>;
  qualification: Observable<any>;

  public selectedGroup: QualificationInterface = {
    id: null,
    note1:null,
    note2:null,
    note3: null,
    noteEnd:null,
    description:'',
    state:'',
  };

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: this.authService.getToken()
  });

  getAllGroups() {
    const url_api = `http://localhost:8000/api/qualification`;
    return this.http.get(url_api);
  }

  getAllQualification() {
    const url_api = `http://localhost:8000/api/qualification`;
    return this.http.get(url_api);
  }
  getNotOffers() {
    const url_api = `http://localhost:8000/api/qualification`;
    return this.http.get(url_api);
  }
  getGroupById(id: string) {
    const url_api = `http://localhost:8000/api/form`;
    return (this.qualification = this.http.get(url_api));
  }

  getStudentById(id: string) {
    const url_api = `http://localhost:8000/api/student`;
    return (this.qualification = this.http.get(url_api));
  }

  getOffers() {
    const url_api = `http://localhost:3000/api/books?filter[where][oferta]=1`;
    return (this.qualification = this.http.get(url_api));
  }

  saveGroup(group: QualificationInterface) {
    // TODO: obtener token
    // TODO: not null
    const token = this.authService.getToken();
    const url_api = `http://localhost:8000/api/qualification`;
    return this.http
      .post<QualificationInterface>(url_api, group, { headers: this.headers })
      .pipe(map(data => data));
  }

  updateGroup(group) {
    // TODO: obtener token
    // TODO: not null

    const groupId = group.groupId;
    const token = this.authService.getToken();
    const url_api = `http://localhost:8000/api/qualification`;
    return this.http
      .put<QualificationInterface>(url_api, group, { headers: this.headers })
      .pipe(map(data => data));
  }


  deleteGroup(id: string) {
    // TODO: obtener token
    // TODO: not null
    const token = this.authService.getToken();
    console.log(token);
    const url_api = `http://localhost:3000/api/books/${id}/?access_token=${token}`;
    return this.http
      .delete<QualificationInterface>(url_api, { headers: this.headers })
      .pipe(map(data => data));
  }
}
