import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Examinations } from './examinations';

describe('Examinations', () => {
  let component: Examinations;
  let fixture: ComponentFixture<Examinations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Examinations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Examinations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
