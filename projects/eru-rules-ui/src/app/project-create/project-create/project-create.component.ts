import { Component, OnInit } from '@angular/core';
import { DMNs } from '../../models/model.model';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {
  _selectedModel : DMNs | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  selectedModel(event : DMNs){
    this._selectedModel = event
  }

}
