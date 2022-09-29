import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { InvoiceComponent } from './invoice/invoice.component';
import { CalendarComponent } from './calendar/calendar.component';
// import { ScheduleModule,RecurrenceEditorModule,DayService, WeekService,MonthService,AgendaService } from '@syncfusion/ej2-angular-schedule';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    InvoiceComponent,
    CalendarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    // ScheduleModule, 
    // RecurrenceEditorModule
  ],
  // providers: [DayService, WeekService, MonthService, AgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
