import { TestBed } from '@angular/core/testing';

import { UserSerrviceService } from './user-serrvice.service';

describe('UserSerrviceService', () => {
  let service: UserSerrviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSerrviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
