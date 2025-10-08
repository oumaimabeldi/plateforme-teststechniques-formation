import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursService } from '../../admin/services/cours-services/cours.service';
import { ChapitreService } from '../../admin/services/cours-services/chapitre.service';

@Component({
  selector: 'app-cours-detail',
  templateUrl: './cours-detail.component.html',
  styleUrls: ['./cours-detail.component.css'] // ✅ bien "styleUrls" au pluriel
})
export class CoursDetailComponent implements OnInit {

  coursId!: number;
  cours: any;
  chapitres: any[] = [];
  selectedChapitre: any = null;

  constructor(
    private route: ActivatedRoute,
    private coursService: CoursService,
    private chapitreService: ChapitreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.coursId = +idParam;
      this.load();
    } else {
      console.error("Aucun ID de cours trouvé dans l'URL");
    }
  }

  load(): void {
    this.coursService.getCoursById(this.coursId).subscribe({
      next: (c) => this.cours = c,
      error: (err) => console.error('Erreur lors du chargement du cours', err)
    });

    this.chapitreService.getChapitresByCours(this.coursId).subscribe({
      next: (chs) => {
        this.chapitres = chs;
        if (chs && chs.length > 0) {
          this.selectChapitre(chs[0]);
        }
      },
      error: (err) => console.error('Erreur lors du chargement des chapitres', err)
    });
  }

  selectChapitre(ch: any): void {
    this.selectedChapitre = ch;
  }

  goToQcm(): void {
    if (this.cours && this.cours.qcmFinalId) {
      this.router.navigate([
        '/collaborateur/cours',
        this.coursId,
        'qcm',
        this.cours.qcmFinalId
      ]);
    } else {
      alert('Aucun QCM final attribué.');
    }
  }
}
