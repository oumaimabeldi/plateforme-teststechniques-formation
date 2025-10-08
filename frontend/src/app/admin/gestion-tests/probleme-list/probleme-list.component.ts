import { Component, OnInit } from '@angular/core';
import { ProblemeService } from '../../services/probleme.service';

@Component({
  selector: 'app-probleme-list',
  templateUrl: './probleme-list.component.html',
  styleUrl: './probleme-list.component.css'
})
export class ProblemeListComponent implements OnInit {

  problemes: any[] = [];
  filteredProblemes: any[] = [];
  searchTerm: string = '';
  loading: boolean = false;

  constructor(private problemeService: ProblemeService) {}

  ngOnInit(): void {
    this.loadProblemes();
  }

  loadProblemes(): void {
    this.loading = true;
    this.problemeService.getAllProblemes().subscribe({
      next: (data) => {
        this.problemes = data;
        this.filteredProblemes = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des problèmes :', err);
        this.loading = false;
      }
    });
  }

  searchProbleme(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredProblemes = this.problemes.filter(p =>
      p.titre?.toLowerCase().includes(term)
    );
  }

  deleteProbleme(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer ce problème ?')) {
      // ⚠️ nécessite l’endpoint backend DELETE
      this.problemeService.deleteProbleme(id).subscribe({
        next: () => {
          this.filteredProblemes = this.filteredProblemes.filter(p => p.id !== id);
        },
        error: (err) => {
          console.error('Erreur lors de la suppression :', err);
        }
      });
    }
  }

}
