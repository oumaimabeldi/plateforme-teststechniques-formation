import { Component } from '@angular/core';
import { CoursService } from '../../services/cours-services/cours.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creation-cours',
  templateUrl: './creation-cours.component.html',
  styleUrl: './creation-cours.component.css'
})
export class CreationCoursComponent {
cours: any = {
    titre: '',
    description: '',
    categorie: '',
    coverUrl: '',
    chapitres: []
  };

  constructor(private coursService: CoursService, private router: Router) {}

  addChapitre() {
    this.cours.chapitres.push({
      titre: '',
      position: this.cours.chapitres.length + 1,
      blocs: []
    });
  }

  addBloc(chapIndex: number) {
    const chap = this.cours.chapitres[chapIndex];
    chap.blocs.push({
      position: chap.blocs.length + 1,
      type: 'TEXT',
      contenu: ''
    });
  }


  removeChapitre(index: number) {
    this.cours.chapitres.splice(index, 1);
    // Recompute positions
    this.cours.chapitres.forEach((c: { position: number }, i: number) => c.position = i + 1);
  }

  removeBloc(chapIndex: number, blocIndex: number) {
    const chap = this.cours.chapitres[chapIndex];
    chap.blocs.splice(blocIndex, 1);
    chap.blocs.forEach((b: any, i: number) => b.position = i + 1);
  }

  saveCours() {
    // Optionnel: validate minimal fields
    this.coursService.createCours(this.cours).subscribe({
      next: res => {
        alert('Cours créé');
        this.router.navigate(['/admin/gestion-cours']);
      },
      error: err => alert('Erreur: ' + (err.error?.message || err.message))
    });
  }
}
