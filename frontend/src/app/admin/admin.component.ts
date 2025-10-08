import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  admin?: User;

constructor(private authService: AuthService ,
  private router: Router,
) {}
  isDarkMode = false;
ngOnInit(): void {
    this.admin = this.authService.getCurrentUser();
}
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }
logout() {
  this.authService.logout();
  this.router.navigate(['/']); }

}
