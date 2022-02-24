import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputTestComponent } from './input-output-test.component';

describe('InputOutputTestComponent', () => {
  let component: InputOutputTestComponent;
  let fixture: ComponentFixture<InputOutputTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOutputTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly render the passed @Input value', () => {
    // there shouldn't be any value initially
    expect(fixture.nativeElement.querySelector('.custom-input').innerText).toBe('');
    // setting @Input value and verifying again
    component.inputValue = 'Test Value';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.custom-input').innerText).toBe('Test Value');
  });

  it('should emit the event when button is clicked', () => {
    let emittedValue= '';
    component.msg.subscribe(d => {
      emittedValue = d;
    });
    /*-----------------or------------------*/
   // spyOn(component.msg, 'emit').and.callThrough();
   // expect(component.msg.emit).toHaveBeenCalledWith('This is emitted message');
   //const button = fixture.nativeElement.querySelector('button');
   // button.click();
   /*----------------------------*/
    component.emitMessage();
    expect(emittedValue).toEqual('This is emitted message');
  });
});
