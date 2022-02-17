import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BehaviorService } from './behavior-service.service';

describe('BehaviorServiceService', () => {
  let service: BehaviorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BehaviorService]
    });
    service = TestBed.inject(BehaviorService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
