import { TestBed } from '@angular/core/testing';

import { ServicePokemonesService } from './service-pokemones.service';

describe('ServicePokemonesService', () => {
  let service: ServicePokemonesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePokemonesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
