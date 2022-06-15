import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { environment } from "../../environments/environment";
import { DataType } from "../models/data-type.model";

@Injectable({
  providedIn: "root",
})
export class ProjectModelService {
  private isLoader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private http: HttpClient) {}

  showLoader(bool = false) {
    this.isLoader.next(bool);
  }

  getDataTypes() {
    return this.http.get(
      environment.base_eru_rules_url + "store/erurules/datatype/list"
    );
  }

  CreateDataTypes(data : any) {
    return this.http.post(
      environment.base_eru_rules_url + "store/erurules/datatype/save",
      data
    );
  }

  /**
   * @param dataTypes Unformated data type which is in map format.
   * @param isExpnaded Option to add `isExpnaded` property in the return object.
   * @returns Formated `JSON` data of type `DataType[]`.
   */
  formatDataType(dataTypes: any, isExpnaded?: boolean): DataType[] {
    const dtModels: DataType[] = [];
    Object.values(dataTypes).forEach((m) => {
      dtModels.push(this.mapToJson(m, isExpnaded));
    });
    return dtModels;
  }

  mapToJson(m: any, isExpnaded?: boolean): DataType {
    let dtm: DataType;
    if(isExpnaded){
      dtm = {
        Name: "",
        Type: "",
        IsArray: false,
        Constraints: "",
        SubDataTypes: [],
        IsExpanded: false,
      };
    }else{
      dtm = {
        Name: "",
        Type: "",
        IsArray: false,
        Constraints: "",
        SubDataTypes: [],
      };
    }

    dtm.Name = m["Name"];
    dtm.Constraints = m["Constraint"];
    dtm.IsArray = m["IsArray"];
    dtm.Type = m["Type"];
    if (m["SubDataTypes"] != null) {
      Object.values(m["SubDataTypes"]).forEach((cm: any) => {
        dtm.SubDataTypes.push(this.mapToJson(cm));
      });
    }
    return dtm;
  }

  unFormatDataType(dataTypes: DataType[]){
    const jsonMap : any = {};
    dataTypes.forEach(data =>{
      jsonMap[data.Name] = this.jsonToMap(data)[data.Name]
    })
    console.log('Unformated Object', jsonMap);
    return jsonMap;
  }

  jsonToMap(dataType: DataType): any {
    const data : any = {};
    data[dataType.Name] = {...dataType}
    data[dataType.Name].SubDataTypes = {};
    if(dataType.SubDataTypes.length > 0){
      dataType.SubDataTypes.forEach(sdt => {
        const SubDataType = this.jsonToMap(sdt);
        data[dataType.Name].SubDataTypes[sdt.Name] = SubDataType[sdt.Name]
      })
    }
    return data;
  }
}
