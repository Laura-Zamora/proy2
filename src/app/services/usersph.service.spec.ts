import { TestBed } from '@angular/core/testing';

import { UsersphService } from './usersph.service';

describe('UsersphService', () => {
  let service: UsersphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
