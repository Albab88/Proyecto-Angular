import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisqueriaAboutComponent } from './disqueria-about.component';

describe('DisqueriaAboutComponent', () => {
  let component: DisqueriaAboutComponent;
  let fixture: ComponentFixture<DisqueriaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisqueriaAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisqueriaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
