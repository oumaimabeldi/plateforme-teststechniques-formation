import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-collaborateur',
  templateUrl: './collaborateur.component.html',
  styleUrl: './collaborateur.component.css'
})
export class CollaborateurComponent implements OnInit {
  isDarkMode = false;
collaborateur?: User;
  constructor(
    private authService: AuthService,
    private router: Router      
  ) {}
  ngOnInit(): void {
    this.collaborateur = this.authService.getCurrentUser();
  }
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }
logout() {
  this.authService.logout();
  this.router.navigate(['/']); }

}
