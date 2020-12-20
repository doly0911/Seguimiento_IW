import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudAddComponent } from './crud-add/crud-add.component';
import { CrudGetComponent } from './crud-get/crud-get.component';
import { CrudEditComponent } from './crud-edit/crud-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudAddComponent,
    CrudGetComponent,
    CrudEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
