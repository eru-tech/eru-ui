import { Component, Input, OnInit } from "@angular/core";
import { DMNs } from "../../models/model.model";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input()
  selectedModel: DMNs | undefined;
  inputDisabled: boolean = true;
  versions: number[] = [1.1, 1.2, 1.3, 2, 2.1, 2.2, 2.3];
  constructor() {}

  ngOnInit(): void {}

  inputToggle() {
    this.inputDisabled = !this.inputDisabled;
  }
}
