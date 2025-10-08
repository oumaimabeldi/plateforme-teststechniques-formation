import { Component, OnInit } from '@angular/core';
import { CoursService } from '../../services/cours-services/cours.service';
import { AttributionCoursService } from '../../services/cours-services/attribution-cours.service';
import { QcmService } from '../../services/qcm.service';
import { CollaborateurService } from '../../services/collaborateur.service';

@Component({
  selector: 'app-attribution-cours',
  templateUrl: './attribution-cours.component.html',
  styleUrl: './attribution-cours.component.css'
})
export class AttributionCoursComponent implements OnInit {
  cours: any[] = [];
  collaborateurs: any[] = [];
  selectedCoursId: number | null = null;
  selectedCollaborateurId: number| null = null;
  qcms: any[] = [];
  selectedQcmId: number |null = null;

  constructor(
    private coursService: CoursService,
    private attributionService: AttributionCoursService,
    private collaborateurService: CollaborateurService,
    private qcmService: QcmService
  ) {}

  ngOnInit() {
    this.coursService.getAllCours().subscribe(c => this.cours = c);
    this.collaborateurService.getCollaborateurs().subscribe(col => this.collaborateurs = col);
    this.qcmService.getAllQcm().subscribe(q => this.qcms = q);
  }

  assign() {
    if (!this.selectedCoursId || !this.selectedCollaborateurId) {
      alert('Sélectionnez cours et collaborateur');
      return;
    }
    this.attributionService.assignCoursToCollaborateur(this.selectedCoursId, this.selectedCollaborateurId)
      .subscribe(() => alert('Attribué'));
  }

  assignQcmToCours() {
    if (!this.selectedCoursId || !this.selectedQcmId) return;
    this.coursService.assignQcmToCours(this.selectedCoursId, this.selectedQcmId).subscribe(() => alert('QCM attribué'));
  }

}
