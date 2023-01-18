import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
// route guard
import { AuthGuard } from './shared/guard/auth.guard';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './crud/add-student/add-student.component';
import { ListStudentComponent } from './crud/list-student/list-student.component';
import { EditStudentComponent } from './crud/edit-student/edit-student.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = 
[

  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  //CRUD ROUTE
  { 
    path: '', 
    component : LayoutComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'home',
    },
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'register-student', component: AddStudentComponent },
      { path: 'view-students', component: ListStudentComponent },
      { path: 'edit-student/:id', component: EditStudentComponent },
    ]

  },

];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
