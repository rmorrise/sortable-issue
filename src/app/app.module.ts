import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListEditorComponent } from './list-editor/list-editor.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SortableModule} from "@progress/kendo-angular-sortable";
import {InputsModule} from "@progress/kendo-angular-inputs";

@NgModule({
  declarations: [
    AppComponent,
    ListEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    InputsModule,
    SortableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
