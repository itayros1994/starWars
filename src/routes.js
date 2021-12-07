import { StarWarsApp } from "./pages/StarWarsApp";
import { Favorties } from "./pages/Favorties";

export const routes = [

    {
        path: '/',
        component: StarWarsApp
    }, 
    {
        path: '/favorites',
        component: Favorties
        
    }, 
]