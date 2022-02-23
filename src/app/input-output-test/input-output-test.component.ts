import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-output-test',
  templateUrl: './input-output-test.component.html',
  styleUrls: ['./input-output-test.component.scss']
})
export class InputOutputTestComponent implements OnInit {

  @Input()
  inputValue = '';

  @Output()
  msg: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  emitMessage() {
    this.msg.emit('This is emitted message');
   }

}
