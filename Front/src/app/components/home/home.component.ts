
import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { DataCalService } from 'src/app/services/data-cal.service';
import { GroupInterface } from '../../models/book-interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private dataApiService: DataApiService, private dataCalService: DataCalService ) {}
  private groups: GroupInterface;
  ngOnInit() {
    this.getListGroups();
    this.getListCal();
  }

getListCal() {
  // tslint:disable-next-line: deprecation
  this.dataCalService.getAllForms()
  .subscribe((calificaciones) => console.log(calificaciones));
}

  getListGroups() {
    this.dataApiService
      .getNotOffers()
      .subscribe((groups: GroupInterface) => (this.groups = groups));
  }

  onPreUpdateGroup(group: GroupInterface): void {
    this.dataApiService.selectedGroup = Object.assign({}, group);
  }

  resetForm(groupForm?: NgForm): void {
    this.dataApiService.selectedGroup = {
      id: null,
      members: '',
      group_leader: '',
      link: '',
      topic: '',
      description_proyect: '',
      scope: '',
      tools: '',
      objetive: '',
      level: '',
      area: '',
      state: ''
    };
  }

}
