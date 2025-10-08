import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gestion-cours',
  templateUrl: './gestion-cours.component.html',
  styleUrl: './gestion-cours.component.css'
})
export class GestionCoursComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

 isMainRoute(): boolean {
   
    return this.router.url.endsWith('/gestion-cours');
  }

  goBack() {
  
    this.router.navigate(['/admin/gestion-cours']);
  }
}
