import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { MainPageComponent } from './main-page/main-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { RoomPageComponent} from './room-page/room-page.component';
import { LogoutActionComponent } from './logout-action/logout-action.component';

const routes: Routes = [
    {
        path: 'logout',
        component: LogoutActionComponent
    },
    {
        path: '',
        component: MainPageComponent
    },
    {
        path: 'edit/:id',
        component: EditPageComponent
    },
    {
        path: 'room/:id',
        component: RoomPageComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
    exports: [RouterModule],
    providers: [AuthGuard]
})

export class AppRoutingModule { 
    
}