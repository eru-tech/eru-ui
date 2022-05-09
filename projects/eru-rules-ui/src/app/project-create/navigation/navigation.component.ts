import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { DMNs, Model } from "../../models/model.model";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
  projects: Model | undefined;
  selectedTab: string | undefined;
  @Output() selectedModel: EventEmitter<DMNs> = new EventEmitter<DMNs>();

  constructor() {}

  ngOnInit(): void {
    this.projects = {
      ProjectId: "Yash",
      DMNs: [
        {
          dmnName: "Flight Booking",
          createdBy: "Yash Mehta",
          lastUpdateDate: "2022-04-16T13:44:40.036158495Z",
          version: 1.1,
        },
        {
          dmnName: "Hotel Booking",
          createdBy: "Yash Mehta",
          lastUpdateDate: "2022-04-16T13:44:40.036158495Z",
          version: 1.2,
        },
      ],
      Dataypes: []
    };
    if (this.projects.DMNs.length > 0) {
      this.selectedTab = this.projects.DMNs[0].dmnName;
      this.selectedModel.emit(this.projects?.DMNs[0]);
    }
  }

  tabChange(data: string, index: number) {
    this.selectedTab = data;
    this.selectedModel.emit(this.projects?.DMNs[index]);
  }
}
