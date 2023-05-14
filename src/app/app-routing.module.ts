import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PreviewComponent} from "./sites/preview/preview.component";
import {DefaultComponent} from "./sites/default/default.component";
import {NavbarComponent} from "./plates/navbar/navbar.component";
import {ErrorComponent} from "./plates/error/error.component";
import {RegisterComponent} from "./plates/register/register.component";
import {IntentsComponent} from "./plates/intents/intents.component";
import {LoginComponent} from "./plates/login/login.component";

const routes: Routes = [
  {path: 'preview', children: [
      {path: '**', component: PreviewComponent},
    ]},
  {path: 'plates', children: [
      {path: 'navbar', component: NavbarComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'intents', component: IntentsComponent},
      {path: 'login', component: LoginComponent},
      {path: '**', component: ErrorComponent}
    ]},
  {path: '', component: DefaultComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
