import { Component, OnInit } from '@angular/core';
import { QualificationInterface } from 'src/app/models/qualification-interface';
import { QualificationService } from 'src/app/services/qualification.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  constructor(private dataApiService: QualificationService) { }
  private groups: QualificationInterface;
  pageActual: number = 1;
  public myCounter: number = 0;
  ngOnInit() {
    this.getListGroups();
  }

  getListGroups(): void {
    this.dataApiService
      .getAllQualification()
      .subscribe((groups: QualificationInterface) => (this.groups = groups));
  }


  onDeleteGroup(groups: QualificationInterface): void {
    if (confirm('Are you sure to delete?')) {
      this.dataApiService.deleteGroup(groups.id).subscribe();
    }
  }

  onPreUpdateGroup(group: QualificationInterface): void {
    this.dataApiService.selectedGroup = Object.assign({}, group);
  }


  resetForm(groupForm?: NgForm): void {
    this.dataApiService.selectedGroup = {
      id: null,
      note1:'',
      note2:'',
      note3:'',
      noteEnd:'',
      description:'',
      state:'',
    };
  }



}
