import React from "react";

const MainView = React.lazy(() => import("../views/MainView"));
const About = React.lazy(() => import("../views/About"));

const Service = React.lazy(() => import("../views/Service"));
const Projects = React.lazy(() => import("../views/Projects"));

const Contact = React.lazy(() => import("../views/Contact"));



const routes = [

    {path:"/mainview", name:"MainView Page", component: MainView},
    {path:"/about", name:"About Page", component: About},

    {path:"/service", name:"Service Page", component: Service},
    {path:"/projects", name:"Projects Page", component: Projects},

    {path:"/contact", name:"Contact Page", component: Contact},

];

export default routes;