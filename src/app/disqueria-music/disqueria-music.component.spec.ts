import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisqueriaMusicComponent } from './disqueria-music.component';

describe('DisqueriaMusicComponent', () => {
  let component: DisqueriaMusicComponent;
  let fixture: ComponentFixture<DisqueriaMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisqueriaMusicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisqueriaMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
