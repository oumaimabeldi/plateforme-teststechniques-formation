import { Component, OnInit } from '@angular/core';
import { CoursService } from '../../services/cours-services/cours.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cours-list',
  templateUrl: './cours-list.component.html',
  styleUrl: './cours-list.component.css'
})
export class CoursListComponent implements OnInit {
  cours: any[] = [];

  constructor(private coursService: CoursService, private router: Router) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.coursService.getAllCours().subscribe(c => this.cours = c);
  }

  deleteCours(id: number) {
    if (confirm('Supprimer ce cours ?')) {
      this.coursService.deleteCours(id).subscribe(() => this.load());
    }
  }

  editCours(cours: any) {
    // optional: navigate to edit form
  }
  public goToCreateCours() {
  this.router.navigate(['/admin/gestion-cours/cours']);
}

public goToCoursDetail(id: number) {
  this.router.navigate(['/collaborateur/cours-detail', id]);
}

}
