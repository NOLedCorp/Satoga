
import { Router, NavigationEnd } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators'
// import { OnInit } from '@angular/core';

@Injectable()
export class SatogaService{
    token:string;
    baseUrl:string='http://client.nomokoiw.beget.tech/satoga/controller.php?';

    constructor(private router:Router, private http: HttpClient){  
    }
    
    public getSections(){
        return this.http.get<any>(this.baseUrl + 'Key=get-sections');
    }

    public getGoods(){
        return this.http.get<any>(this.baseUrl + 'Key=get-goods').pipe(
            tap(goods => {
                goods.forEach(element => {
                   element.Main = Number(element.Main); 
                   element.InStock = Number(element.InStock);
                });
            })
        );
    }

    public getMain(){
        return this.http.get<any>(this.baseUrl + 'Key=get-main');
    }

    public getArticles(){
        return this.http.get<any>(this.baseUrl + 'Key=get-articles');
    }

    public getPhotoes(){
        return this.http.get<any>(this.baseUrl + 'Key=get-photoes');
    }

    public getVideos(){
        return this.http.get<any>(this.baseUrl + 'Key=get-videos');
    }

    public getAuthors(){
        return this.http.get<any>(this.baseUrl + 'Key=get-authors');
    }

    //-------------------------Единичные объекты----------------------------

    public getArticle(id){
        return this.http.get<any>(this.baseUrl + 'Key=get-article&Id='+id);
    }

    public getGood(id){
        return this.http.get<any>(this.baseUrl + 'Key=get-good&Id='+id);
    }

    //-------------------------Отправка заявки-----------------------------

    public addApp(app){
        return this.http.post<any>(this.baseUrl + 'Key=add-app', app);
    }

    
}

