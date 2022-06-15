export interface DataType {
    Name: string,
    Type: string,
    Constraints: string,
    IsExpanded?: boolean,
    IsArray : boolean,
    SubDataTypes: DataType[],
}