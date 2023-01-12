import { TestBed } from '@angular/core/testing';

import { AgregarExperienciaServicioService } from './agregar-experiencia-servicio.service';

describe('AgregarExperienciaServicioService', () => {
  let service: AgregarExperienciaServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarExperienciaServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
