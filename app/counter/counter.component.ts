

import { Component, OnInit, Input, Output, EventEmitter,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: ' <button (click)="increment()">+</button>{{counterValue }}'+
  '<button (click)="decrement()">-</button>',
  styles:['button{ color:Green}'],
 encapsulation: ViewEncapsulation.Native
})
export class CounterComponent implements OnInit { 
 @Input('counter') counterValue:number;
 @Output() counterChange;

  constructor() {
  this.counterChange=new EventEmitter();
    }

  ngOnInit() {
     
    }

    counterset(){
 this.counterChange.emit(this.counterValue);
    }

ngOnChanges(){
  //to emit as soon as there is a change in the input to this componet. Angular detects automatically that
   this.counterChange.emit(this.counterValue);
}
    
  increment(){      
  this.counterValue++;
    this.counterset();
  }

  decrement(){
    this.counterValue--;
    this.counterset();
  } 

}
