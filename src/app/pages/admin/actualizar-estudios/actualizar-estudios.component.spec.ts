import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEstudiosComponent } from './actualizar-estudios.component';

describe('ActualizarEstudiosComponent', () => {
  let component: ActualizarEstudiosComponent;
  let fixture: ComponentFixture<ActualizarEstudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarEstudiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarEstudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
