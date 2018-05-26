import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [];

const appRouter = [
  { path: '', redirectTo: '/login', pathMatch: "full"},
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent }

]
export const AppRoutingModule = RouterModule.forRoot(appRouter);
