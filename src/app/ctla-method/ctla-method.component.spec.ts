import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtlaMethodComponent } from './ctla-method.component';

describe('CtlaMethodComponent', () => {
  let component: CtlaMethodComponent;
  let fixture: ComponentFixture<CtlaMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CtlaMethodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtlaMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
