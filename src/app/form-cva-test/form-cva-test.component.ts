import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InputTestComponent } from './input-test/input-test.component';

@Component({
  selector: 'app-form-cva-test',
  templateUrl: './form-cva-test.component.html',
  styleUrls: ['./form-cva-test.component.scss']
})
export class FormCvaTestComponent implements OnInit {

  inputForm!: FormGroup;
  constructor(private fb: FormBuilder){
    this.inputForm = this.fb.group({
      input: [null, Validators.required]
    })
  }
  ngOnInit(): void {

  }

  @ViewChild(InputTestComponent, { static: true })
  inputTestComponent: InputTestComponent = new InputTestComponent;



}
