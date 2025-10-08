import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gestion-tests',
  templateUrl: './gestion-tests.component.html',
  styleUrl: './gestion-tests.component.css'
})
export class GestionTestsComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

 isMainRoute(): boolean {
   
    return this.router.url.endsWith('/gestion-tests');
  }

  goBack() {
  
    this.router.navigate(['/admin/gestion-tests']);
  }
}
