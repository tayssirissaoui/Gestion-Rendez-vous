import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SignupComponent } from './signup/signup.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { SecretaireComponent } from './secretaire/secretaire.component';

const routes: Routes = [
  { path: 'login', component:LoginComponent },
  { path: '', component:AccueilComponent },
  { path: 'sign', component:SignupComponent },
  { path: 'patient', component:PatientComponent },
  { path: 'doctor', component:DoctorComponent },
  { path: 'secretaire', component:SecretaireComponent },
  { path: 'acc', component:AccueilComponent }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
