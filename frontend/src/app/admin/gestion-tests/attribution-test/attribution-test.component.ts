import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { CandidatService } from '../../services/candidat.service';
import { QcmService } from '../../services/qcm.service';
import { ProblemeService } from '../../services/probleme.service';
import { AttributionService } from '../../services/attribution.service';


@Component({
  selector: 'app-attribution-test',
  templateUrl: './attribution-test.component.html',
  styleUrls: ['./attribution-test.component.css']
})
export class AttributionTestComponent implements OnInit {


  attributionForm!: FormGroup;
  candidats: any[] = [];
  qcms: any[] = [];
  problemes: any[] = [];
  successMsg = '';
  errorMsg = '';

  constructor(
    private fb: FormBuilder,
    private candidatService: CandidatService,
    private qcmService: QcmService,
    private problemeService: ProblemeService,
    private attributionService: AttributionService
  ) {}

  ngOnInit() {
    this.attributionForm = this.fb.group({
      candidatId: ['', Validators.required],
      qcmIds: this.fb.array([]),
      problemeIds: this.fb.array([]),
      durationMinutes: [60, [Validators.required, Validators.min(5)]]
    });

    this.loadCandidats();
    this.loadQcms();
    this.loadProblemes();
  }

  loadCandidats() {
    this.candidatService.getCandidats().subscribe(res => this.candidats = res);
  }

  loadQcms() {
    this.qcmService.getAllQcm().subscribe(res => this.qcms = res);
  }

  loadProblemes() {
    this.problemeService.getAllProblemes().subscribe(res => this.problemes = res);
  }

  onQcmChange(event: any, qcmId: number) {
    const qcmIds = this.attributionForm.get('qcmIds') as FormArray;
    if (event.target.checked) {
      qcmIds.push(this.fb.control(qcmId));
    } else {
      const index = qcmIds.controls.findIndex(x => x.value === qcmId);
      if (index >= 0) qcmIds.removeAt(index);
    }
  }

  onProblemeChange(event: any, problemeId: number) {
    const problemeIds = this.attributionForm.get('problemeIds') as FormArray;
    if (event.target.checked) {
      problemeIds.push(this.fb.control(problemeId));
    } else {
      const index = problemeIds.controls.findIndex(x => x.value === problemeId);
      if (index >= 0) problemeIds.removeAt(index);
    }
  }

  onSubmit() {
    if (this.attributionForm.invalid) {
      this.errorMsg = 'Veuillez sélectionner un candidat, un test et un délai.';
      return;
    }

    this.attributionService.assignTests(this.attributionForm.value).subscribe({
      next: () => {
        this.successMsg = 'Tests attribués avec succès ✅';
        this.errorMsg = '';
        this.attributionForm.reset({ durationMinutes: 60 });
        (this.attributionForm.get('qcmIds') as FormArray).clear();
        (this.attributionForm.get('problemeIds') as FormArray).clear();
      },
      error: () => {
        this.errorMsg = 'Erreur lors de l\'attribution ❌';
        this.successMsg = '';
      }
    });
  }
}
