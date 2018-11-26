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
     canActivate: [AuthGuard]   },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule', canActivate: [AuthGuard] },
  { path: 'reset-password', loadChildren: './pages/reset-password/reset-password.module#ResetPasswordPageModule', 
  canActivate: [AuthGuard]  },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' , canActivate: [AuthGuard] },
  { path: 'categorie', loadChildren: './pages/categorie/categorie.module#CategoriePageModule', canActivate: [AuthGuard]  },
  { path: 'pagamenti', loadChildren: './pages/pagamenti/pagamenti.module#PagamentiPageModule', canActivate: [AuthGuard]  },
  { path: 'fornitori', loadChildren: './pages/fornitori/fornitori.module#FornitoriPageModule', canActivate: [AuthGuard]  },
  { path: 'grafici', loadChildren: './pages/grafici/grafici.module#GraficiPageModule', canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
