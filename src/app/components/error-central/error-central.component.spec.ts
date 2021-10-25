import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorCentralComponent } from './error-central.component';

describe('ErrorCentralComponent', () => {
  let component: ErrorCentralComponent;
  let fixture: ComponentFixture<ErrorCentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorCentralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
