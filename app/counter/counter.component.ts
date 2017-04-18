

import { Component, OnInit, Input, Output, EventEmitter,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: ' <button (click)="increment()">+</button>{{counterValue }}'+
  '<button (click)="decrement()">-</button>',
  styles:['button{ color:Green}'],
 encapsulation: ViewEncapsulation.Native
})
export class CounterComponent implements OnInit { 
 @Input() counter:number;
 @Output() counterChange;
 public counterValue:number;

  constructor() {
  this.counterChange=new EventEmitter();
  this.counterValue=0;
   }

  ngOnInit() {
    if(this.counter){
   this.counterValue=this.counter;
   this.counterChange.emit(this.counterValue);
     }     
    }

    counterset(){
 this.counterChange.emit(this.counterValue);
    }

ngOnChanges(){
   this.counterValue=this.counter;
   this.counterChange.emit(this.counterValue);
}
    
  increment(){      
   this.counter=this.counterValue++;
    this.counterset();
  }

  decrement(){
    this.counter=this.counterValue--;
    this.counterset();
  } 

}
