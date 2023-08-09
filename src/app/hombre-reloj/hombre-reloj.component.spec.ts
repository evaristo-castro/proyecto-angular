import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HombreRelojComponent } from './hombre-reloj.component';

describe('HombreRelojComponent', () => {
  let component: HombreRelojComponent;
  let fixture: ComponentFixture<HombreRelojComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HombreRelojComponent]
    });
    fixture = TestBed.createComponent(HombreRelojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
