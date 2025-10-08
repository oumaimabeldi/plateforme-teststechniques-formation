import { Component, OnInit } from '@angular/core';
import { QcmService } from '../../services/qcm.service';

@Component({
  selector: 'app-qcm-list',
  templateUrl: './qcm-list.component.html',
  styleUrl: './qcm-list.component.css'
})
export class QcmListComponent implements OnInit {

  qcms: any[] = [];
  filteredQcms: any[] = [];
  searchTerm: string = '';
  loading: boolean = true;

  constructor(private qcmService: QcmService) {}

  ngOnInit(): void {
    this.loadQcms();
  }

  loadQcms(): void {
    this.qcmService.getAllQcm().subscribe({
      next: (data) => {
        this.qcms = data;
        this.filteredQcms = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des QCM :', err);
        this.loading = false;
      }
    });
  }

  searchQcm(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredQcms = this.qcms.filter(qcm =>
      qcm.titre?.toLowerCase().includes(term)
    );
  }

  deleteQcm(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer ce QCM ?')) {
      this.qcmService.deleteQcm(id).subscribe({
        next: () => {
          this.qcms = this.qcms.filter(q => q.id !== id);
          this.filteredQcms = this.filteredQcms.filter(q => q.id !== id);
        },
        error: (err) => console.error('Erreur lors de la suppression :', err)
      });
    }
  }

}
