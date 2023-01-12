import { TestBed } from '@angular/core/testing';

import { AgregarEstudiosService } from './agregar-estudios.service';

describe('AgregarEstudiosService', () => {
  let service: AgregarEstudiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarEstudiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
