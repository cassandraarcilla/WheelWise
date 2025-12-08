import { Routes } from '@angular/router';
import { Home } from './home/home';
import { EmployeeDirectory } from './employee-directory/employee-directory';
import { About } from './about/about';
import { ProductsServices } from './products-services/products-services';
import { BookNow } from './book-now/book-now';
import { Pagenotfound } from './pagenotfound/pagenotfound';

export const routes: Routes = [
    {path:'', component: Home},
    {path:'employee-directory', component: EmployeeDirectory},
    {path:'about', component: About},
    {path:'products-services', component: ProductsServices},
    {path:'book-now', component: BookNow},
    {path:'**', component: Pagenotfound}
    
];
