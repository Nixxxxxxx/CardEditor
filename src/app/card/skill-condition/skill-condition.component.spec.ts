import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillConditionComponent } from './skill-condition.component';

describe('SkillConditionComponent', () => {
  let component: SkillConditionComponent;
  let fixture: ComponentFixture<SkillConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillConditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
