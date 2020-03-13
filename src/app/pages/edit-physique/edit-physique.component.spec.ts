import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPhysiqueComponent } from './edit-physique.component';

describe('EditPhysiqueComponent', () => {
  let component: EditPhysiqueComponent;
  let fixture: ComponentFixture<EditPhysiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPhysiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPhysiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
