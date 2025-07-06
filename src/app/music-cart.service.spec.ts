import { TestBed } from '@angular/core/testing';

import { MusicCartService } from './music-cart.service';

describe('MusicCartService', () => {
  let service: MusicCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
