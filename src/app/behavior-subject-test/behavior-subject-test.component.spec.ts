import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CommonModule} from '@angular/common';
import { BehaviorSubjectTestComponent } from './behavior-subject-test.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BehaviorService } from './behavior-service.service';

describe('BehaviorSubjectTestComponent', () => {
  let component: BehaviorSubjectTestComponent;
  let fixture: ComponentFixture<BehaviorSubjectTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, HttpClientTestingModule],
      declarations: [ BehaviorSubjectTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorSubjectTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getObs', () => {
    const service = fixture.debugElement.injector.get(BehaviorService);
    service.testName$.next("hello world");
    component.getObs();
    expect(component.data).toEqual("hello world");
  });
});
