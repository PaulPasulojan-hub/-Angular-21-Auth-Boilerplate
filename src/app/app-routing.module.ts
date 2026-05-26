import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './_helpers';
import { Role } from './_models';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const adminModule = () => import('./admin/accounts/admin.module').then(x => x.AdminModule);

const routes: Routes = [
    {
        path: '',
        loadChildren: accountModule
    },
    {
        path: 'admin',
        loadChildren: adminModule,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }