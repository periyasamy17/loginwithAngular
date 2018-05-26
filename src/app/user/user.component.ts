import { Component, OnInit, TemplateRef } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public userTableHead = ['Meeting agenda','Meeting duration','Assigned to (email)','Action'];
  public userList = [{id: '1', meetingAenga: 'Making of wireframe',meetingDuration:'10 minutes', userEmail: 'rahul@gmail.com',action:'Delete'}];

  modalRef: BsModalRef;
  constructor( private modalService: BsModalService) { 

  }

  ngOnInit() {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  registationForm(value) {
    console.log(value)
    value['action'] = "created";
    this.userList.push(value);
  }

}
