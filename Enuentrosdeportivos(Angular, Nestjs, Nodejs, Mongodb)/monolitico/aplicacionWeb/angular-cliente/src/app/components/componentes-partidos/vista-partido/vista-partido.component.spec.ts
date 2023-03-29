import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPartidoComponent } from './vista-partido.component';

describe('VistaPartidoComponent', () => {
  let component: VistaPartidoComponent;
  let fixture: ComponentFixture<VistaPartidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaPartidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaPartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
