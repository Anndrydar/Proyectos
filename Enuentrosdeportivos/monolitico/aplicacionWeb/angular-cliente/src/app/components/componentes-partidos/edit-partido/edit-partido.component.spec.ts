import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPartidoComponent } from './edit-partido.component';

describe('EditPartidoComponent', () => {
  let component: EditPartidoComponent;
  let fixture: ComponentFixture<EditPartidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPartidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
