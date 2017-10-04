import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorClassFormComponent } from './majorclass-form.component';

describe('MajorclassFormComponent', () => {
  let component: MajorClassFormComponent;
  let fixture: ComponentFixture<MajorClassFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorClassFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorClassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
