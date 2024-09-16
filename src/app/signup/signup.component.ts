import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private http: HttpClient, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      Nom: ['', Validators.required],
      prenom: ['', Validators.required],
      Adresse: ['', Validators.required],
      numeroDeTelephone: ['', [Validators.required, Validators.pattern("^[0-9]*$")]], 
      email: ['', [Validators.required, Validators.email]],
      whoAreYou: ['', Validators.required], 
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.http.post<any>('http://localhost:3000/user', this.signupForm.value)
        .subscribe(
          (res) => {
            alert('Signup successful');
            this.signupForm.reset();
            this.router.navigate(['login']);
          },
          (err) => {
            alert('Signup not successful');
          }
        );
    }
  }
}
