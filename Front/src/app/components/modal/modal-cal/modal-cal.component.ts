import { QualificationService } from 'src/app/services/qualification.service';
import {  OnInit, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modal-cal',
  templateUrl: './modal-cal.component.html',
  styleUrls: ['./modal-cal.component.css']
})
export class ModalCalComponent implements OnInit {

  constructor(
    private dataApiService: QualificationService,
    private location: Location) { }

  ngOnInit() {
  }
  onSaveBook(groupForm: NgForm): void {
    if (groupForm.value.id == null) {
      // NEW
      this.dataApiService.saveGroup(groupForm.value).subscribe(group => location.reload());
    } else {
      // update
      this.dataApiService.updateGroup(groupForm.value).subscribe(group => location.reload());
    }
  }

}


