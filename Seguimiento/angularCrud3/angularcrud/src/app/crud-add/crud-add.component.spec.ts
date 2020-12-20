import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAddComponent } from './crud-add.component';

describe('CrudAddComponent', () => {
  let component: CrudAddComponent;
  let fixture: ComponentFixture<CrudAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
