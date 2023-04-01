import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaTorneoComponent } from './vista-torneo.component';

describe('VistaTorneoComponent', () => {
  let component: VistaTorneoComponent;
  let fixture: ComponentFixture<VistaTorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaTorneoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
