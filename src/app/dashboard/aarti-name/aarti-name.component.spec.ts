import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AartiNameComponent } from './aarti-name.component';

describe('AartiNameComponent', () => {
  let component: AartiNameComponent;
  let fixture: ComponentFixture<AartiNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AartiNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AartiNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
