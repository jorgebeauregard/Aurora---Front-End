import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { RoomPageComponent} from './room-page/room-page.component';

const routes: Routes = [
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
    exports: [RouterModule]
})

export class AppRoutingModule { 
    
}