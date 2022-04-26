import { Component, Directive, ElementRef, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-inline-input",
  templateUrl: "./inline-input.component.html",
  styleUrls: ["./inline-input.component.scss"],
})
export class InlineInputComponent implements OnInit {
  @Input() data: string | undefined;
  @Output() dataChange: EventEmitter<string> = new EventEmitter<string>();
  editMode = false;
  constructor() {}

  ngOnInit() {}

  onFocusOut() {
    this.dataChange.emit(this.data);
  }

  inputToggle() {
    this.editMode = !this.editMode;
  }

  blur(event: any) {
    console.log("event", event);
    (event.target as HTMLElement).blur()
  }
}

@Directive({
  selector: '[appAutofocus]',
})
export class AutofocusDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.focus();
  }
}

