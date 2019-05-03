import {Component, Inject, OnInit} from '@angular/core';
import {UserHttpService} from "../../common/services/http/user-http.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {AddUserModalComponent} from "../../common/components/add-user-modal/add-user-modal.component";
import * as moment from "moment";
@Component({
    selector: 'demo-app',
    templateUrl: './demo.component.html',
    styleUrls: ['demo.component.scss'],
    providers: [UserHttpService, BsModalRef, BsModalService]
})
export class DemoComponent implements OnInit{
  userList = [];
  addUserComponentRef: BsModalRef;
  // modal config.
  public config = {
    animated: true,
    keyboard: false,
    backdrop: true,
    ignoreBackdropClick: true
  };

  constructor(
    private userHttpService: UserHttpService,
    private modalService: BsModalService
  ){}
  ngOnInit() {
    this.loadUsers();
  }

  addNewUser() {
    this.addUserComponentRef = this.modalService.show(AddUserModalComponent, this.config);
    this.addUserComponentRef.content.onClose.subscribe(user => {
      if (user) {
        this.userHttpService.addUser(user).subscribe((res) => {
          if (res) {
            this.loadUsers();
          }
        })
      }
    })
  }

  loadUsers () {
    this.userHttpService.getAllUsers().subscribe((users : any)=> {
      if (users) {
        this.userList = users;
      }
    })
  }

  formateDate(timeStamp) {
    return moment(timeStamp).format("YYYY-MM-DD")
  }

  removeUser(id) {
    this.userHttpService.removeUserById(id).subscribe(res => {
      this.loadUsers();
    })
  }
}
