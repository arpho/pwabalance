import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/user/authguard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule', canActivate: [AuthGuard] },
  {
    path: 'reset-password', loadChildren: './pages/reset-password/reset-password.module#ResetPasswordPageModule',
    canActivate: [AuthGuard]
  },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule', canActivate: [AuthGuard] },
  { path: 'categorie', loadChildren: './pages/categorie/categorie.module#CategoriePageModule', canActivate: [AuthGuard] },
  { path: 'pagamenti', loadChildren: './pages/pagamenti/pagamenti.module#PagamentiPageModule', canActivate: [AuthGuard] },
  { path: 'fornitori', loadChildren: './pages/fornitori/fornitori.module#FornitoriPageModule', canActivate: [AuthGuard] },
  { path: 'grafici', loadChildren: './pages/grafici/grafici.module#GraficiPageModule', canActivate: [AuthGuard] },
  {
    path: 'supplierUpdate/:key', loadChildren: './pages/supplier-update/supplier-update.module#SupplierUpdatePageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'supplierCreate', loadChildren: './pages/supplier-create/supplier-create.module#SupplierCreatePageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'pageItemsList', loadChildren: './modules/item/components/page-items-list/page-items-list.module#PageItemsListPageModule',
    canActivate: [AuthGuard]
  },
  { path: 'info', loadChildren: './pages/info/info.module#InfoPageModule' },
  {
    path: 'shoppingKartUpdate',
    loadChildren: './pages/shoppingKartUpdate/shopping-kart-update/shopping-kart-update.module#ShoppingKartUpdatePageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'shoppingKartCreate',
    loadChildren: './pages/shoppingKartCreate/shopping-kart-create/shopping-kart-create.module#ShoppingKartCreatePageModule',
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
