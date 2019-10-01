import {Component, OnInit} from '@angular/core';
import {ListItem} from "./item";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: ListItem[] = [
    {
      id: 1,
      label: 'Foo'
    },
    {
      id: 2,
      label: 'Bar'
    }
  ];
  parentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.parentForm = this.formBuilder.group({});
  }

  onListEditorFormCreated($event: FormArray) {
    this.parentForm.addControl('list', $event);
  }
}
