import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouldRComponent } from './mould-r.component';

describe('MouldRComponent', () => {
  let component: MouldRComponent;
  let fixture: ComponentFixture<MouldRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouldRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouldRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
