import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrl: './candidat.component.css'
})
export class CandidatComponent implements OnInit {
  isDarkMode = false;
  candidat?: User;

  constructor(private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
  
    this.candidat = this.authService.getCurrentUser();
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }
logout() {
  this.authService.logout();
  this.router.navigate(['/']); }

}
