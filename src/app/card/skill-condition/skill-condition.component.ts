import {  Component,  ViewChild,  ViewContainerRef,  Injector,  Inject,  ChangeDetectorRef } from '@angular/core';
import { ConditionFilterStatementComponent } from './condition-filter-statement/condition-filter-statement.component';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-skill-condition',
  templateUrl: './skill-condition.component.html',
  styleUrls: ['./skill-condition.component.scss'],
})
export class SkillConditionComponent {
  @ViewChild('dropdownContainer', { read: ViewContainerRef })
  container!: ViewContainerRef;
  filterStatements: {
    component: ConditionFilterStatementComponent;
    componentRef: any;
  }[] = [];

  height = 150;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private injector: Injector,
    private dialogRef: MatDialogRef<SkillConditionComponent>,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    if (this.container) {
      console.log('Condition Passed: ', this.data.condition);
      const resultArray = this.data.condition.split('###');
      resultArray.forEach((element: string) => {
        const result = element.split('#');
        const componentRef = this.container.createComponent(
          ConditionFilterStatementComponent,
          { injector: this.injector }
        );
        const instance = componentRef.instance;
        instance.key = result[0];
        instance.operator = result[1];
        instance.value = result[2];
        this.cdr.detectChanges();

        this.filterStatements.push({
          component: instance,
          componentRef: componentRef,
        });
        instance.remove.subscribe(() => {
          this.removeDropdownRow(componentRef);
        });
        this.height += 50;
        this.dialogRef.updateSize('500px', this.height + 'px');
      });
    } else {
      // Handle the case where container is not available
    }
  }

  addRow() {
    const componentRef = this.container.createComponent(
      ConditionFilterStatementComponent,
      { injector: this.injector }
    );

    const instance = componentRef.instance;
    this.filterStatements.push({
      component: instance,
      componentRef: componentRef,
    });

    instance.remove.subscribe(() => {
      this.removeDropdownRow(componentRef);
    });
    this.height += 50;
    this.dialogRef.updateSize('500px', this.height + 'px');
  }

  onSubmit() {
    const selectedValues = this.filterStatements
      .map( (comp) => comp.component.key + '#' +  comp.component.operator + '#' +  comp.component.value)
      .join('###');
    console.log("x-x:" + selectedValues);

    // Optionally, pass data back to the dialog opener
    this.dialogRef.close(selectedValues);
  }

  cancel() {
    this.dialogRef.close();
  }

  removeDropdownRow(componentRef: any) {
    // Find the component in the array and remove it
    const componentIndex = this.filterStatements.findIndex(
      (item) => item.componentRef === componentRef
    );
    if (componentIndex !== -1) {
      this.filterStatements.splice(componentIndex, 1);
      componentRef.destroy();
      this.height -= 50;
      this.dialogRef.updateSize('500px', this.height + 'px');
    }
  }
}
