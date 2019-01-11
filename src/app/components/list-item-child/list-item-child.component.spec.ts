import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemChildComponent } from './list-item-child.component';

describe('ListItemChildComponent', () => {
  let component: ListItemChildComponent;
  let fixture: ComponentFixture<ListItemChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
