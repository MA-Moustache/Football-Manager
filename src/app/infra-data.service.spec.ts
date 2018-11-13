import { TestBed } from '@angular/core/testing';

import { InfraDataService } from './infra-data.service';

describe('InfraDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfraDataService = TestBed.get(InfraDataService);
    expect(service).toBeTruthy();
  });
});
