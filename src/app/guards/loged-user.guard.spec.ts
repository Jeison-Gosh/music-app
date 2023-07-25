import { TestBed } from '@angular/core/testing';

import { LogedUserGuard } from './loged-user.guard';

describe('LogedUserGuard', () => {
  let guard: LogedUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogedUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
