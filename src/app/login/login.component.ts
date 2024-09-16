import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupForm!: FormGroup;
  maxAttempts: number = 3;
  attempts: number = 0;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.http.get<any>('http://localhost:3000/user')
      .subscribe(
        (res) => {
          const user = res.find((a: any) => a.email === this.signupForm.value.email && a.password === this.signupForm.value.password);
          
          if (user) {
            alert('Connecté avec succès');
            this.signupForm.reset();
  
            if (user.whoAreYou === 'doctor') {
              this.router.navigate(['/doctor']); 
            } else if (user.whoAreYou === 'patient') {
              this.router.navigate(['/patient']);  
            } else if (user.whoAreYou === 'secretary') {
              this.router.navigate(['/secretaire']);  
            } else {
              alert('Rôle non reconnu');
            }
  
          } else {
            this.attempts++;
            if (this.attempts >= this.maxAttempts) {
              alert('Le nombre maximal de tentatives a été atteint. Veuillez créer un autre compte.');
              this.router.navigate(['/view']);
            } else {
              alert('La connexion a échoué, email ou mot de passe invalide. Nombre de tentatives restantes : ' + (this.maxAttempts - this.attempts));
            }
          }
        },
        (err) => {
          alert('Une erreur est survenue lors de la connexion');
        }
      );
  }
  
}
