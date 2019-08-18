
import { Router, NavigationEnd } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalService } from './modal.service';
import { LoadService } from './load.service';
import { UserService } from './user.service';
import { UploadTypes } from './models';
// import { OnInit } from '@angular/core';

@Injectable()
export class AdminService{
    baseUrl:string='http://client.nomokoiw.beget.tech/satoga/admin_controller.php?';

    constructor(private http: HttpClient, ){  
    }


    public addItem(enter, table){
        return this.http.post<any>(this.baseUrl + 'Key=add-item&Table='+table, enter);
    }

    public addProduct(enter){
        return this.http.post<any>(this.baseUrl + 'Key=add-product', enter);
    }

    public updateItem(enter, table){
        return this.http.post<any>(this.baseUrl + 'Key=update-item&Table='+table, enter);
    }

    /**
     * Загрузка файлов на сервер
     * @param id Id родителя изображения
     * @param type тип родителя изображения
     * @param data изображение (FormData)
     * @param column столбец таблицы в который нужно вставить ссылку на файл
     */
    UploadFile(id, type:UploadTypes, data, column='Photo') {
        return this.http.post<string>(this.baseUrl + 'Key=upload-file&Id='+id+'&Type='+type+'&Column='+column, data, {
          reportProgress:true,
          observe:'events'
        });
      }
}

