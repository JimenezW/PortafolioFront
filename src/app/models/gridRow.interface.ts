export interface GridRowI {
   row : GridCell[]
}

export interface GridCell {
    field : string,
    value : string,
    type? : number,
    action? : any
}