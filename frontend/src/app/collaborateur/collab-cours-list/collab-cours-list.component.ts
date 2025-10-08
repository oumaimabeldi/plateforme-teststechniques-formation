import { Component, OnInit } from '@angular/core';
import { CollaborateurCoursService } from '../services/collaborateur-cours.service';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-collab-cours-list',
  templateUrl: './collab-cours-list.component.html',
  styleUrls: ['./collab-cours-list.component.css'] // ⚠️ ici c’est styleUrls (pluriel)
})
export class CollabCoursListComponent implements OnInit {

  coursAttribues: any[] = [];
  collaborateur?: User;

  constructor(
    private collaborateurCoursService: CollaborateurCoursService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // 🔹 Récupération du collaborateur connecté
    this.collaborateur = this.authService.getCurrentUser();

    if (this.collaborateur && this.collaborateur.id) {
      this.load(this.collaborateur.id);
    } else {
      console.error("Aucun collaborateur connecté !");
    }
  }

  load(collaborateurId: number): void {
    this.collaborateurCoursService.getCoursAttribues(collaborateurId).subscribe({
      next: (coursList: any[]) => {
        // Le backend renvoie directement une liste de Cours
        this.coursAttribues = coursList;
      },
      error: (err) => console.error("Erreur de chargement des cours :", err)
    });
  }

  openCours(cours: any): void {
    this.router.navigate(['/collaborateur/cours-detail', cours.id]);
  }
}
