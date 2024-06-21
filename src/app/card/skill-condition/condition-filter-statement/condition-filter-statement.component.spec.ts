import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionFilterStatementComponent } from './condition-filter-statement.component';

describe('ConditionFilterStatementComponent', () => {
  let component: ConditionFilterStatementComponent;
  let fixture: ComponentFixture<ConditionFilterStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionFilterStatementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionFilterStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
