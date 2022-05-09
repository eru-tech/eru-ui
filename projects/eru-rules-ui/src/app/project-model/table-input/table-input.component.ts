import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatSelect } from "@angular/material/select";

@Component({
  selector: "[appTableInput]",
  templateUrl: "./table-input.component.html",
  styleUrls: ["./table-input.component.scss"],
})
export class TableInputComponent implements OnInit {
  @Input() data: string | undefined;
  @Output() dataChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() type: string | undefined;
  @Input() showDrop: boolean | undefined;
  @Input() dropClicked: boolean | undefined;
  @Input() editEnable: boolean | undefined;
  @Output() dropClickedChange = new EventEmitter<boolean>();
  @ViewChild("input") input: ElementRef | undefined;
  @ViewChild("select") select: MatSelect | undefined;
  @Input() customOptions: string[] | undefined;
  isClicked = false;

  inputControl = new FormControl("", Validators.required);
  options = [
    "Object",
    "Any",
    "Boolean",
    "Context",
    "Date",
    "Date & Time",
    "Date & Time Duration",
    "Number",
    "String",
    "Time",
    "Years & Monthh Duration",
  ];
  editMode = false;
  constructor() {}

  ngOnInit(): void {
    if(this.editEnable){
      this.inputToggle();
    }
    this.inputControl.setValue(this.data);
  }

  onFocusOut() {
    if (this.inputControl.value === "") {
      if (this.type === "text") {
        this.input?.nativeElement.focus();
      } else if (this.type === "select") {
        this.select?.focus();
      }
      return;
    }
    this.data = this.inputControl.value.trim();
    this.dataChange.emit(this.inputControl.value.trim());
    this.inputToggle();
  }

  inputToggle() {
    this.editMode = !this.editMode;
    if (this.editMode) {
      if (this.type === "text") {
        setTimeout(() => this.input?.nativeElement.focus());
      } else if (this.type === "select") {
        setTimeout(() => this.select?.focus());
      }
    }
  }

  blur(event: Event) {
    (event.target as HTMLElement).blur();
  }

  dropDownClicked() {
    this.isClicked = !this.isClicked;
    this.dropClickedChange.emit(this.isClicked);
  }
}
