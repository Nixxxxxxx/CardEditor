import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-condition-filter-statement',
  templateUrl: './condition-filter-statement.component.html',
  styleUrls: ['./condition-filter-statement.component.scss']
})
export class ConditionFilterStatementComponent {
  key: string;
  operator : string;
  value : string;
  @Output() remove = new EventEmitter<void>();

  keyOptions = ["Race","Job","Gender","AttackAfinity","Atk","Def","Cost","Hand","Grid"];
  operatorOptions: string[] = [ "==", "!=", ">=", "<="];
  // All possible values for the value dropdown	because of the way the dropdown is implemented
  // we need to have all possible values in the array for reload to work
  valueOptions: string[] = [
    "Human","Elf","Ore","Undead","Elemental","Reptile","Demi-Human","Beast","Dwarf","Dragon","Mech",
    "None", "Knight", "Mage", "Archer", "Arch-Mage",
    "F", "M", "B",
    "AffinityMediator", "AffinityKill", "AffinityDisintegrate",
    "0","1","2","3","4","5","6","7","8","9"
  ];

  numberOperatorOptions = [ "==", "!=", ">=", "<="];
  stringOperatorOptions = [ "==", "!="];
  raceOptions = ["Human","Elf","Ore","Undead","Elemental","Reptile","Demi-Human","Beast","Dwarf","Dragon","Mech"];
  jobOptions = ["None", "Knight", "Mage", "Archer", "Arch-Mage"];
  genderOptions = ["F", "M", "B"];
  attackAfinityOptions = [ "AffinityMediator", "AffinityKill", "AffinityDisintegrate"];
  numberOptions = ["0","1","2","3","4","5","6","7","8","9"];
  gridOptions = [];

  constructor() {
    this.key = "None";
    this.operator = "None";
    this.value = "None";
  }

  updateDropdownOptions(value1: string) {
    if (value1 === 'Race') {
      this.operatorOptions = this.stringOperatorOptions
      this.valueOptions = this.raceOptions;
    } else if (value1 === 'Job') {
      this.operatorOptions = this.stringOperatorOptions;
      this.valueOptions = this.jobOptions;
    } else if (value1 === 'Gender') {
      this.operatorOptions = this.stringOperatorOptions;
      this.valueOptions = this.genderOptions;
    } else if (value1 === 'AttackAfinity') {
      this.operatorOptions = this.stringOperatorOptions;
      this.valueOptions = this.attackAfinityOptions;
    } else if (value1 === 'Grid') {
      this.operatorOptions = this.stringOperatorOptions;
      this.valueOptions = this.gridOptions;
    } else {
      this.operatorOptions = this.numberOperatorOptions;
      this.valueOptions = this.numberOptions;
    }

    this.operator = this.operatorOptions[0];
    this.value = this.valueOptions[0];
  }

  removeComponent() {
    this.remove.emit();
  }
}
