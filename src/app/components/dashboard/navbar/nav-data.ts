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
                routeLink:'adm/cliente',
                icon:'fad fa-clipboard-user',
                label:'Cliente',
                subMenu : false,
                items:[]
            },
            {
                routeLink:'adm/empleados',
                icon:'fad fa-users-cog',
                label:'Empleados',
                subMenu : false,
                items:[]
            },
            {
                routeLink:'adm/users',
                icon:'fad fa-users-cog',
                label:'Usuarios',
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
                label:'Generar',
                subMenu : false,
                items:[]
            },
            {
                routeLink:'',
                icon:'fad fa-wallet',
                label:'Consulta',
                subMenu : false,
                items:[ ]
            }
        ]
    },
    {
        routeLink:'',
        icon:'fad fa-badge-dollar',
        label:'Ventas',
        subMenu : true,
        items:[
            {
                routeLink:'',
                icon:'fad fa-wallet',
                label:'Productos',
                subMenu : false,
                items:[]
            },
            {
                routeLink:'',
                icon:'fad fa-wallet',
                label:'Carrito',
                subMenu : false,
                items:[ ]
            }
        ]
    },
    {
        routeLink:'',
        icon:'fad fa-th-list',
        label:'Catalogos',
        subMenu : true,
        items:[
            {
                routeLink:'',
                icon:'fad fa-wallet',
                label:'Estados',
                subMenu : false,
                items:[]
            },
            {
                routeLink:'',
                icon:'fad fa-wallet',
                label:'Municipios',
                subMenu : false,
                items:[ ]
            },
            {
                routeLink:'',
                icon:'fad fa-wallet',
                label:'Localidades',
                subMenu : false,
                items:[]
            }
          ]
    }
    
];