import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ShowCardComponent } from './card/show-card/show-card.component';
import { AddCardComponent as AddCardComponent } from './card/add-card/add-card.component';

import { HttpClientModule , HTTP_INTERCEPTORS} from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { EditCardComponent } from './card/edit-card/edit-card.component';
import { SkillConditionComponent } from './card/skill-condition/skill-condition.component';
import { GridComponent } from './grid/grid.component';
import { GridEditComponent } from './grid/grid-edit/grid-edit.component';
import { GridAddComponent } from './grid/grid-add/grid-add.component';
import { RegisterComponent } from './register/register.component';
import { SharedService } from "./shared.service";
import { AuthService } from "./auth.service";

import { AuthHeaderInterceptor } from './auth.header.interceptor';
import { AuthLoginInterceptor } from './auth.login.interceptor';
import { LoginComponent } from './login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { ConditionFilterStatementComponent } from './card/skill-condition/condition-filter-statement/condition-filter-statement.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ShowCardComponent,
    AddCardComponent,
    EditCardComponent,
    SkillConditionComponent,
    GridComponent,
    GridEditComponent,
    GridAddComponent,
    RegisterComponent,
    LoginComponent,
    ConditionFilterStatementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [SharedService, AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthLoginInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthHeaderInterceptor,multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
