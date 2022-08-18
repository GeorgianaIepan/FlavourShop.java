import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationContainerComponent} from "../containers/registration-container/registration-container.component";
import {ProductListComponent} from "../components/product-list/product-list.component";
import {LoginContainerComponent} from "../containers/login-container/login-container.component";
import {HomeComponent} from "../components/home/home.component";
import {EmailConfirmationComponent} from "../components/email-confirmation/emailconfirmation";

const routes: Routes = [
  {
    path: 'registration',
    component: RegistrationContainerComponent,
    pathMatch: 'full'
  }, {
    path: 'products',
    component: ProductListComponent,
    pathMatch: 'full'
  }, {
    path: 'login',
    component: LoginContainerComponent,
    pathMatch: 'full'
  }, {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'emailconfirmation',
    component: EmailConfirmationComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
