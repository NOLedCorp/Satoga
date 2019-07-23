import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Формы
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

//Модальные окна
import { ModalModule, BsModalService } from 'ngx-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './services/modal.service';

//HTTP запросы
import { HttpClientModule, HttpClient } from '@angular/common/http';

//Компоненты
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadComponent } from './load/load.component';
import { UserService } from './services/user.service';
import { LoadService } from './services/load.service';
import { AdminService } from './services/admin.service';


@NgModule({
  declarations: [
    AppComponent,
    LoadComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [FormBuilder, HttpClient, ModalService, BsModalService, UserService, LoadService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
