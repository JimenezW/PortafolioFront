export interface INavbarData{
    routeLink:string,
    icon? : string,
    label : string,
    expanded? : boolean,
    subMenu: boolean,
    items:INavbarData[]
}