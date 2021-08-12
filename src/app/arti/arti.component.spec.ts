import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtiComponent } from './arti.component';

describe('ArtiComponent', () => {
  let component: ArtiComponent;
  let fixture: ComponentFixture<ArtiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
