import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DemoComponent} from './demo.component';
import {CommonModule} from '@angular/common';
import {DemoRoutingModule} from './demo-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {DatepickerModule, ModalModule} from 'ngx-bootstrap';
import {AddUserModalComponent} from '../../common/components/add-user-modal/add-user-modal.component';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    DemoRoutingModule,
    ModalModule.forRoot(),
    HttpClientModule,
    DatepickerModule,
    FormsModule,
    ButtonModule,
    InputTextModule
  ],
  declarations: [DemoComponent, AddUserModalComponent],
  entryComponents:[
    AddUserModalComponent
  ]
})

export class DemoModule {
}
