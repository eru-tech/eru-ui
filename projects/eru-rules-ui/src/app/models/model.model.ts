import { DataType } from "./data-type.model";
import { User } from "./user.model";

export interface DMNs{
    dmnName : string
    createdBy: string,
    lastUpdateDate: string;
    version: number;
}
export interface Model{
    ProjectId: string,
    DMNs: DMNs[],
    Dataypes: DataType[]
}