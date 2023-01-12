import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEstudiosComponent } from './agregar-estudios.component';

describe('AgregarEstudiosComponent', () => {
  let component: AgregarEstudiosComponent;
  let fixture: ComponentFixture<AgregarEstudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEstudiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEstudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
