import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionBComponent } from './solution-b.component';

describe('SolutionBComponent', () => {
  let component: SolutionBComponent;
  let fixture: ComponentFixture<SolutionBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
