import { INavbarData } from "./helper";

export const navbarData : INavbarData[] = [
    {
        routeLink:'/dashboard',
        icon:'fad fa-home',
        label:'Dashboard',
        subMenu : false,
        items:[]
    },
    {
        routeLink:'',
        icon:'fad fa-archive',
        label:'Administración',
        subMenu : true,
        items:[
            {
                routeLink:'/cliente',
                icon:'fad fa-user-alt',
                label:'Cliente',
                subMenu : false,
                items:[]
            }
        ]
    },
    {
        routeLink:'',
        icon:'fad fa-wallet',
        label:'Facturación',
        subMenu : true,
        items:[
            {
                routeLink:'',
                icon:'fad fa-wallet',
                label:'Facturación 2',
                subMenu : false,
                items:[]
            },
            {
                routeLink:'',
                icon:'fad fa-wallet',
                label:'Facturación 3',
                subMenu : false,
                items:[ ]
            }
        ]
    },
    {
        routeLink:'',
        icon:'fad fa-badge-dollar',
        label:'Ventas',
        subMenu : false,
        items:[]
    },
    {
        routeLink:'',
        icon:'fad fa-th-list',
        label:'Catalogos',
        subMenu : false,
        items:[  ]
    }
    
];