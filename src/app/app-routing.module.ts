import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { MainPageComponent } from './main-page/main-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { RoomPageComponent} from './room-page/room-page.component';
import { LogoutActionComponent } from './logout-action/logout-action.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
    {
        path: 'logout',
        component: LogoutActionComponent
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: '',
        component: MainPageComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'edit/:id',
        component: EditPageComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'room/:id',
        component: RoomPageComponent,
        canActivate: [AuthGuard]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
    exports: [RouterModule],
    providers: [AuthGuard]
})

export class AppRoutingModule { 
    
}