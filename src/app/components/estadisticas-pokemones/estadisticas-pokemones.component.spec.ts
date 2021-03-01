import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasPokemonesComponent } from './estadisticas-pokemones.component';

describe('EstadisticasPokemonesComponent', () => {
  let component: EstadisticasPokemonesComponent;
  let fixture: ComponentFixture<EstadisticasPokemonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadisticasPokemonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticasPokemonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
