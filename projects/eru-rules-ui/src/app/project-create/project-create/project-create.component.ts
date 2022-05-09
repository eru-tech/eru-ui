import { Component, OnInit } from '@angular/core';
import { DMNs } from '../../models/model.model';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {
  _selectedModel : DMNs | undefined;
  versions = [1, 1.1, 2, 2.1, 3, 2.1]

  constructor() { }

  ngOnInit(): void {
    // Fetch Version of seleted Model
  }

  selectedModel(event : DMNs){
    this._selectedModel = event
  }

  actionButtonClicked(){

  }

}
