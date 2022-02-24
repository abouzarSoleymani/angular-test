import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { FormCvaTestComponent } from './form-cva-test.component';
import { InputTestComponent } from './input-test/input-test.component';
  describe('InputTestComponent', () => {
    let component: InputTestComponent;
    let fixture: ComponentFixture<FormCvaTestComponent>;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [InputTestComponent, FormCvaTestComponent],
        imports: [ReactiveFormsModule]
      })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(FormCvaTestComponent);
      component = fixture.componentInstance.inputTestComponent;
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
    it('Should make the name control required', () => {
      const control = fixture.componentInstance.inputForm.get('input');
      control?.setValue(null);
      expect(control?.valid).toBeFalsy();
    });
});
