import { TestBed } from '@angular/core/testing';

import { AgregarCursosService } from './agregar-cursos.service';

describe('AgregarCursosService', () => {
  let service: AgregarCursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarCursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
