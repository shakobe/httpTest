import { TestBed } from '@angular/core/testing';

import { MypicksService } from './mypicks.service';

describe('MypicksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MypicksService = TestBed.get(MypicksService);
    expect(service).toBeTruthy();
  });
});
