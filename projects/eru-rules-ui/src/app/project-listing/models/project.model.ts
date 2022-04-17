import { Model } from "../../models/model.model";
import { User } from "../../models/user.model";

export interface Project {
    createdBy: string,
    projectName: string;
    lastUpdateDate: string;
}