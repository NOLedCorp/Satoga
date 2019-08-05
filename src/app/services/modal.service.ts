import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { TemplateRef, Injectable } from '@angular/core';

@Injectable()
export class ModalService{
    modalRef: BsModalRef;
    modal:TemplateRef<any>;
    type:string;
    inpt:any;
    closeFunc:Function;
    //html = document.getElementsByTagName('html')[0];
    
    constructor(private modalService: BsModalService){
    }
    
    close(){
        this.type = "";
        this.inpt = undefined;
        this.modalRef.hide();
        //this.html.style.overflow = 'unset';
    }
    open(type, inpt?,func?){
        this.closeFunc=func?func:undefined;
        this.type = type;
        this.inpt = inpt?inpt:undefined;
        
        //this.html.style.overflow = 'hidden';
        this.modalRef = this.modalService.show(this.modal);
    }
}