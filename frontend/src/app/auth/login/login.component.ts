import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  isloading = false;
  usernameForm!: FormGroup;
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.usernameForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }

 onsubmit() {
  if (this.usernameForm.invalid) return;

  this.isloading = true;
  this.auth.login(this.usernameForm.value.email, this.usernameForm.value.password).subscribe({
    next: (res) => {
      this.auth.saveToken(res.token);
      this.auth.saveRole(res.role);

     
      this.http.get<any>('http://localhost:8082/api/auth/me').subscribe({
        next: (user) => {
          this.auth.saveCurrentUser(user);

          if (res.role === 'ADMIN') {
            this.router.navigate(['/admin']);
          } else if (res.role === 'CANDIDAT') {
            this.router.navigate(['/candidat']);
          } else if (res.role === 'COLLABORATEUR') {
            this.router.navigate(['/collaborateur']);
          } else {
            this.error = 'Rôle non reconnu';
          }

          this.isloading = false;
        },
        error: () => {
          this.error = 'Impossible de récupérer les infos utilisateur';
          this.isloading = false;
        }
      });
    },
    error: () => {
      this.error = 'Email ou mot de passe incorrect';
      this.isloading = false;
    },
  });
}

}
