import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMoralComponent } from './edit-moral.component';

describe('EditMoralComponent', () => {
  let component: EditMoralComponent;
  let fixture: ComponentFixture<EditMoralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMoralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMoralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
