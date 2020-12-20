import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudGetComponent } from './crud-get.component';

describe('CrudGetComponent', () => {
  let component: CrudGetComponent;
  let fixture: ComponentFixture<CrudGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
