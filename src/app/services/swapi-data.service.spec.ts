import { TestBed } from '@angular/core/testing';

import { SwapiDataService } from './swapi-data.service';

describe('SwapiDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwapiDataService = TestBed.get(SwapiDataService);
    expect(service).toBeTruthy();
  });
});
