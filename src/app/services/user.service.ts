
import { Router, NavigationEnd } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalService } from './modal.service';
import { LoadService } from './load.service';
// import { OnInit } from '@angular/core';

@Injectable()
export class UserService{
    public user:any;
    token:string;
    showContent=false;
    userKey = "satogaUserKey";
    
    baseUrl:string='http://client.nomokoiw.beget.tech/satoga/';

    constructor(private router:Router, private http: HttpClient, private ls:LoadService){
        // sessionStorage.removeItem('userAdminPanel');
        // localStorage.removeItem('userAdminPanel');
        if(sessionStorage.getItem(this.userKey)){
            let u = JSON.parse(sessionStorage.getItem(this.userKey));
            this.signIn(u.Login, u.Password).subscribe(data => {
                if(data){
                    this.user = {Login:u.Login, Password:u.Password};
                    this.save();
                }
            })
        }
        else if(localStorage.getItem(this.userKey)){
            let u = JSON.parse(localStorage.getItem(this.userKey));
            this.signIn(u.Login, u.Password).subscribe(data => {
                if(data){
                    this.user = {Login:u.Login, Password:u.Password};
                    this.save();
                }
            })
            
        }

        
    }

    set User(User:any){
        this.user = User.User;
        this.token = User.Token; 
    }

    exit(){
        this.user = null;
        sessionStorage.removeItem(this.userKey);
        localStorage.removeItem(this.userKey);
    }

    /**
     * Авторизация пользователя
     * @param login login пользовтеля
     * @param password Пароль пользователя
     */
    public signIn(login:string, password:string){
        return this.http.get<any>(this.baseUrl + 'admin_controller.php?Key=enter&Login='+login+'&Password='+password);
    }

    /**
     * Регистрация пользователя
     * @param user Новый пользователь
     */
    public signUp(user:any){
        return this.http.post<any>(this.baseUrl + 'UserController.php?Key=add-user', user);
    }

    /**
     * Сохрание данных пользователя онлайн
     * @param local сохранение пользователя в localStorage на клиенте
     */
    public save(local = false){
        if(local){
            localStorage.setItem(this.userKey, JSON.stringify(this.user));
        }
        sessionStorage.setItem(this.userKey, JSON.stringify(this.user));
    }
    
    /**
     * Генерация пароля
     */
    GenPassword(){
        let alf = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
        var res = "";
        for(let i = 0; i<10;i++){
            let r = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
            if(r > 3 ){
               if(r>6){
                res+=alf[Math.floor(Math.random() * (alf.length-1 - 0 + 1)) + 0].toUpperCase().toString();
               }
               else{
                res+=alf[Math.floor(Math.random() * (alf.length-1 - 0 + 1)) + 0].toString();
               }
               
            }
            else{
                res+=r.toString();
            }
        }
        return res;

    }
}

