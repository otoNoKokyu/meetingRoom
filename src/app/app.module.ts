import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { UsersComponent } from './users/users.component';
import { UserListFilterComponent } from './user-list-filter/user-list-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetingsComponent,
    UsersComponent,
    UserListFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
