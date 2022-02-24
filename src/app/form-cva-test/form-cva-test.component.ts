import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InputTestComponent } from './input-test/input-test.component';

@Component({
  selector: 'app-form-cva-test',
  templateUrl: './form-cva-test.component.html',
  styleUrls: ['./form-cva-test.component.scss']
})
export class FormCvaTestComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @ViewChild(InputTestComponent, { static: true })
  inputTestComponent: InputTestComponent = new InputTestComponent;

  form = new FormGroup({
    input: new FormControl('Test Value')
  });

}
