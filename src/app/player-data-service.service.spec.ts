import { TestBed } from '@angular/core/testing';

import { PlayerDataServiceService } from './player-data-service.service';

describe('PlayerDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerDataServiceService = TestBed.get(PlayerDataServiceService);
    expect(service).toBeTruthy();
  });
});
