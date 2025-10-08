import { Component, OnInit } from '@angular/core';
import { QcmDto } from '../../models/qcm-dto.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from '../services/candidat.service';


@Component({
  selector: 'app-qcm-candidat',
  templateUrl: './qcm-candidat.component.html',
  styleUrl: './qcm-candidat.component.css'
})
export class QcmCandidatComponent implements OnInit {
  qcmId!: number;
  qcm?: QcmDto;
  answers: number[] = [];
  loading = true;
  submitted = false;
  scoreMessage = '';

  constructor(
    private route: ActivatedRoute,
    private candidatService: CandidatService,
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.qcmId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadQcm();
  }

  loadQcm() {
    this.candidatService.getQcm(this.qcmId).subscribe({
      next: (data) => {
        console.log('QCM reçu :', data);
        this.qcm = data;
        this.answers = new Array(data.questions.length).fill(-1);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        alert('Erreur lors du chargement du QCM');
      }
    });
  }

  submitQcm() {
    if (!this.qcm) return;

    this.candidatService.submitQcm({ qcmId: this.qcm.id, answers: this.answers })
      .subscribe({
        next: (msg) => {
          this.submitted = true;
          this.scoreMessage = msg;
        },
        error: () => alert('Erreur lors de la soumission du QCM')
      });
  }
goToMesTests() {
  this.router.navigate(['/candidat/mes-tests']);
}
}
