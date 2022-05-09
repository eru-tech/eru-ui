import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DMNs } from '../../models/model.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() selectedModel: DMNs | undefined;
  @Input() versions: number[] | undefined;
  @Input() actionButtonMesssage : string | undefined;
  @Output() actionButtonClicked : EventEmitter<any> = new EventEmitter();
  inputDisabled: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  inputToggle() {
    this.inputDisabled = !this.inputDisabled;
  }

  actionButtonClick(){
    this.actionButtonClicked.emit();
  }
}
