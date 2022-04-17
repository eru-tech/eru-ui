import { User } from "./user.model";

export interface DMNs{
    dmnName : string
    createdBy: string,
    lastUpdateDate: string;
}
export interface Model{
    ProjectId: string,
    DMNs: DMNs[],
}