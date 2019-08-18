import { ElementRef, Directive, Input, Renderer2, HostListener, OnInit } from '@angular/core';

@Directive({
    selector: '[alert]',
    
})
export class AlertDirective implements OnInit{
    @Input() message:string;
    constructor(private element:ElementRef, private renderer:Renderer2){
        
        
    }

    ngOnInit(){
        let alert = document.createElement('div');
        alert.style.padding="10px";
        let styles = {
            'padding':'10px',
            'position':'absolute',
            'top':'calc( 100% + 25px )',
            'left':'-10px',
            'border':'1px solid lightgray',
            'border-radius':'5px',
            'background-color':'white',
            'display':'none',
            'max-width':'200px',
            'color':'black',
            'z-index':'10'
        }
        this.setStyles(alert, styles);
        alert.innerText=this.message;
        let corner = document.createElement('div');
        let s = {
            'position':'absolute',
            'width':'0',
            'height':'0',
            'left':'30px',
            'bottom':'100%',
            'border':'10px solid',
            'border-color':'transparent transparent lightgray lightgray'
        }
        this.setStyles(corner, s);
        alert.append(corner);
        this.element.nativeElement.append(alert);
        this.element.nativeElement.addEventListener('mouseenter', ()=>{
            console.log(this.element)
            alert.style.display = 'block';
        })

        this.element.nativeElement.addEventListener('mouseleave', function(){
            alert.style.display = 'none';
        })
    }

    setStyles(element, styles){
        Object.entries(styles).forEach(([s,v]) => {
            element.style[s]=v;
        })
    }
}