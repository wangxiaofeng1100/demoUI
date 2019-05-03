/**
 * Created Date: Monday, December 18th 2017, 06:16:27 am
 * Author: KSC
 * Copyright (c) 2017 Kingland System Corporation. All Rights Reserved
 */

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import * as moment from 'moment';
import {DatepickerConfig} from "ngx-bootstrap";
import {Subject} from "rxjs/internal/Subject";

@Component({
  selector: 'add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss'],
  providers: [DatepickerConfig],
  encapsulation: ViewEncapsulation.None
})
export class AddUserModalComponent implements OnInit {
  newUser: any = {};
  public onClose: Subject<any>;

  constructor(
    public bsModalRef: BsModalRef,
    private bsModalService: BsModalService) {
  }


  ngOnInit() {
    this.onClose = new Subject();
  }

  selectDate(event) {
    if (event) {
      this.newUser['birthday'] = moment(event.value).utc().valueOf();
    }
  }

  saveUser () {
    if (this.newUser) {
      this.onClose.next(this.newUser);
      console.log(JSON.stringify(this.newUser));
      this.bsModalRef.hide();
    }
  }
}
