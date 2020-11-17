import {Routes} from '@angular/router';
import {AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';


export const appRoutes: Routes = [
    { path: '', redirectTo: 'productos', pathMatch: 'full'},
    { path: 'productos', component: ProductsComponent},
    { path: 'carrito', component: ShopingCartComponent},
]