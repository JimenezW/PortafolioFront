export const navbarData = [
    {
        routeLink:'/dashboard',
        icon:'fad fa-home',
        label:'Dashboard',
        subMenu : false
    },
    {
        routeLink:'',
        icon:'fad fa-archive',
        label:'Administración',
        subMenu : true,
        items:[
            {
                routeLink:'',
                icon:'fad fa-user-alt',
                label:'Cliente',
                subMenu : false
            }
        ]
    },
    {
        routeLink:'',
        icon:'fad fa-wallet',
        label:'Facturación',
        subMenu : false
    },
    {
        routeLink:'',
        icon:'fad fa-badge-dollar',
        label:'Ventas',
        subMenu : false
    },
    {
        routeLink:'',
        icon:'fad fa-th-list',
        label:'Catalogos',
        subMenu : true
    }
    
];