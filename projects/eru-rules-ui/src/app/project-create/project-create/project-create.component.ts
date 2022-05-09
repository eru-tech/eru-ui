import { Component, OnInit } from '@angular/core';
import { DMNs } from '../../models/model.model';
import { Project } from '../../project-listing/models/project.model';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {
  _selectedModel : DMNs | undefined;
  versions = [1, 1.1, 2, 2.1, 3, 2.1]
  selectedProject : Project | undefined;
  constructor() { }

  ngOnInit(): void {
    // Fetch Version of seleted Model
    this.selectedProject =  {      
      projectName: "MyProject2",
      createdBy: 'Yash Mehta',
      lastUpdateDate: "2022-04-16T13:44:40.036158495Z",
    }
  }

  selectedModel(event : DMNs){
    this._selectedModel = event
  }

  actionButtonClicked(){

  }

}
