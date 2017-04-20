import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-comp1',
  template: `
    <h1>Component 1:</h1>
      <ul> 
        <li>Message 1: {{message1}}</li>
        <li>Message 2: {{message2222}}</li>
        <li>Message 3: {{message3333}}</li>
      </ul>
      <p><ng-content></ng-content></p>
  `
})
export class Comp1Component  {
  public message1;
  @Input() message2222;
  @Input() message3333;

  constructor() { 
     this.message1 = 'default message from testing'
  }

}
