import { Component, OnInit } from '@angular/core';
import { AttributionService } from '../../admin/services/attribution.service';
import { AuthService } from '../../auth/auth.service';
import { Attribution } from '../../models/attribution.model';
import { CandidatService } from '../services/candidat.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.css'
})
export class TestsComponent implements OnInit {
  tests: Attribution[] = [];
  loading = true;

  constructor(private candidatService: CandidatService) {}

  ngOnInit(): void {
    this.candidatService.getMyTests().subscribe({
      next: (data) => {
        this.tests = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  getTestTitle(test: Attribution): string {
    if (test.qcm) return `QCM - ${test.qcm.titre}`;
    if (test.probleme) return `Problème - ${test.probleme.titre}`;
    return 'Test';
  }
}
