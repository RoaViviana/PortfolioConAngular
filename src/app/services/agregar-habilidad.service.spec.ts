import { TestBed } from '@angular/core/testing';

import { AgregarHabilidadService } from './agregar-habilidad.service';

describe('AgregarHabilidadService', () => {
  let service: AgregarHabilidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarHabilidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
