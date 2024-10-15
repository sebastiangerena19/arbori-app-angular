import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelliwellMethodComponent } from './helliwell-method.component';

describe('HelliwellMethodComponent', () => {
  let component: HelliwellMethodComponent;
  let fixture: ComponentFixture<HelliwellMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelliwellMethodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelliwellMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
