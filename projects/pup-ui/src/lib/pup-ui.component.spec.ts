import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PupUiComponent } from './pup-ui.component';

describe('PupUiComponent', () => {
  let component: PupUiComponent;
  let fixture: ComponentFixture<PupUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PupUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PupUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
