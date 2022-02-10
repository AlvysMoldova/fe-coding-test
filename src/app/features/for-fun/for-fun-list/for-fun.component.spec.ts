import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForFunComponent } from './for-fun.component';

describe('ForFunComponent', () => {
  let component: ForFunComponent;
  let fixture: ComponentFixture<ForFunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForFunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
