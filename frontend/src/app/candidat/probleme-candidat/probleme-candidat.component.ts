import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatService } from '../services/candidat.service';


@Component({
  selector: 'app-probleme-candidat',
  templateUrl: './probleme-candidat.component.html',
  styleUrls: ['./probleme-candidat.component.css']
})
export class ProblemeCandidatComponent implements OnInit {

  probleme: any;
  code: string = '';
  selectedLanguage: string = 'java';

  languages: string[] = ['java', 'python', 'javascript', 'c', 'cpp'];

  editorOptions = {
    theme: 'vs-dark',
    language: this.selectedLanguage,
    automaticLayout: true
  };

  executionResult: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private candidatService: CandidatService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.candidatService.getProbleme(id).subscribe((data: any) => {
      this.probleme = data;
      this.selectedLanguage = data.language?.toLowerCase() || 'java';
      this.editorOptions = { ...this.editorOptions, language: this.selectedLanguage };
    });
  }

  testerCode() {
    // ici si ton backend a une route spécifique genre /probleme/test tu appelles candidatService.testerProbleme()
    this.executionResult = `Simulation locale :
Langage = ${this.selectedLanguage}
Code = ${this.code.substring(0, 100)}...`;
  }

  soumettreCode() {
    if (!this.probleme) return;

    this.candidatService.submitProbleme({
      problemeId: this.probleme.id,
      code: this.code
    }).subscribe({
      next: (res: string) => {
        this.executionResult = `✅ Soumission réussie : ${res}`;
      },
      error: () => {
        this.executionResult = '❌ Erreur lors de la soumission';
      }
    });
  }
}
