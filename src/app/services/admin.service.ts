
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


    
    

    public addSection(section){
        return this.http.post<any>(this.baseUrl + 'Key=add-section', section);
    }

    public addItem(enter, table){
        return this.http.post<any>(this.baseUrl + 'Key=add-item&Table='+table, enter);
    }

    public addInventory(enter){
        return this.http.post<any>(this.baseUrl + 'Key=add-inventory', enter);
    }

    public addAuthor(enter){
        return this.http.post<any>(this.baseUrl + 'Key=add-author', enter);
    }

    public addCrochet(enter){
        return this.http.post<any>(this.baseUrl + 'Key=add-crochet', enter);
    }

    public addGrowing(enter){
        return this.http.post<any>(this.baseUrl + 'Key=add-growing', enter);
    }

    public addPeriodical(enter){
        return this.http.post<any>(this.baseUrl + 'Key=add-periodical', enter);
    }

    public addExperiment(enter){
        return this.http.post<any>(this.baseUrl + 'Key=add-experiment', enter);
    }

    public addCatalog(enter){
        return this.http.post<any>(this.baseUrl + 'Key=add-catalog', enter);
    }

    public updateAuthor(enter){
        return this.http.post<any>(this.baseUrl + 'Key=update-author', enter);
    }

    public updateCrochet(enter){
        return this.http.post<any>(this.baseUrl + 'Key=update-crochet', enter);
    }

    public updateMethod(enter){
        return this.http.post<any>(this.baseUrl + 'Key=update-method', enter);
    }

    public updateInventory(enter){
        return this.http.post<any>(this.baseUrl + 'Key=update-inventory', enter);
    }

    public updateSolid(enter){
        return this.http.post<any>(this.baseUrl + 'Key=update-solid', enter);
    }

    public updateGrowing(enter){
        return this.http.post<any>(this.baseUrl + 'Key=update-growing', enter);
    }

    public updatePeriodical(enter){
        return this.http.post<any>(this.baseUrl + 'Key=update-periodical', enter);
    }

    public updateExperiment(enter){
        return this.http.post<any>(this.baseUrl + 'Key=update-experiment', enter);
    }

    public updateCatalog(enter){
        return this.http.post<any>(this.baseUrl + 'Key=update-catalog', enter);
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

