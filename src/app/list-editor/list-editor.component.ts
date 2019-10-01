import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-list-editor',
  templateUrl: './list-editor.component.html',
  styleUrls: ['./list-editor.component.css']
})
export class ListEditorComponent implements OnInit {
  @Input() public reorder: boolean;

  @Input()
  public set items(items: any[]) {
    while (this.formArray.controls.length > 0) {
      this.formArray.removeAt(0);
    }
    if (items && items.length > 0) {
      items.forEach(it => this.formArray.push(this.newItemForm(it)));
    }
  }

  @Output()
  public formCreated: EventEmitter<FormArray> = new EventEmitter<FormArray>();

  /*
   * Form controls
   */
  public isReorder: FormControl;
  public formArray: FormArray;

  /*
   * Rendering properties
   */
  public get showReorderControls(): boolean {
    return this.reorder && this.isReorder.value;
  }

  constructor(private formBuilder: FormBuilder) {
    this.formArray = this.formBuilder.array([]);
  }

  ngOnInit() {
    if (this.reorder) {
      this.isReorder = this.formBuilder.control(false);
    }
    this.formCreated.emit(this.formArray);
  }

  private newItemForm(item?: any): FormGroup {
    const itemGroup = this.formBuilder.group({
      'id': [],
      'label': [Validators.required]
    });
    if (item) {
      itemGroup.reset(item);
    }
    return itemGroup;
  }

  onSortDragEnd($event: any) {
    this.formArray.updateValueAndValidity();
  }
}
