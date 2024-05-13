import { Routes } from '@angular/router';
import { CreateUserProfileComponent } from './create-user-profile/create-user-profile.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [

    {
        path : 'register',
        component : CreateUserProfileComponent
    },
    {
        path : '',
        component : LoginUserComponent
    },
    {
        path : 'home',
        component : HomeComponent
    }

];
