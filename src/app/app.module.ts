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
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SectionsComponent } from './sections/sections.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { ArticlesComponent } from './articles/articles.component';
import { GalleryComponent } from './gallery/gallery.component';
import { VideosComponent } from './videos/videos.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PhotoViewerComponent } from './photo-viewer/photo-viewer.component';
import { SectionComponent } from './section/section.component';
import { ProductComponent } from './product/product.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SatogaService } from './services/satoga.service';
import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
  declarations: [
    AppComponent,
    LoadComponent,
    ModalComponent,
    MenuComponent,
    HomeComponent,
    CatalogComponent,
    SectionsComponent,
    FooterComponent,
    FormComponent,
    ArticlesComponent,
    GalleryComponent,
    VideosComponent,
    ContactsComponent,
    PhotoViewerComponent,
    SectionComponent,
    ProductComponent,
    CarouselComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [FormBuilder, HttpClient, ModalService, BsModalService, UserService, LoadService, AdminService, SatogaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
