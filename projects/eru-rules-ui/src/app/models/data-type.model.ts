export interface DataType{
    name: string,
    type: string,
    constraints: string,
    isExpanded : boolean,
    dataTypes: DataType[]
}