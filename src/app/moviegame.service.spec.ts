import { TestBed, inject } from '@angular/core/testing';

import { MoviegameService } from './moviegame.service';

describe('MoviegameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviegameService]
    });
  });

  it('should be created', inject([MoviegameService], (service: MoviegameService) => {
    expect(service).toBeTruthy();
  }));
});
