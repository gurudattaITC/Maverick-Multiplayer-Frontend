import { TestBed, inject } from '@angular/core/testing';

import { MatchingUserService } from './matching-user.service';

describe('MatchingUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatchingUserService]
    });
  });

  it('should be created', inject([MatchingUserService], (service: MatchingUserService) => {
    expect(service).toBeTruthy();
  }));
});
