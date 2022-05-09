import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../../project-listing/models/project.model';

@Component({
  selector: 'app-model-heder',
  templateUrl: './model-heder.component.html',
  styleUrls: ['./model-heder.component.scss']
})
export class ModelHederComponent implements OnInit {
  @Input() selectedProject: Project | undefined;
  @Input() versions: number[] | undefined;
  @Input() actionButtonMesssage : string | undefined;
  @Output() actionButtonClicked : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  actionButtonClick(){
    this.actionButtonClicked.emit();
  }

}
