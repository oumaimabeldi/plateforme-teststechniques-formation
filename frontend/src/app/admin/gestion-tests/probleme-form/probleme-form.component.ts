import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProblemeService } from '../../services/probleme.service';

@Component({
  selector: 'app-probleme-form',
  templateUrl: './probleme-form.component.html',
  styleUrl: './probleme-form.component.css'
})
export class ProblemeFormComponent implements OnInit{
 problemeForm!: FormGroup;
  successMsg = '';
  errorMsg = '';

  constructor(private fb: FormBuilder, private problemeService: ProblemeService) {}

  ngOnInit() {
    this.problemeForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      language: ['', Validators.required],
      input: [''],
      expectedOutput: ['']
    });
  }

  getError(control: any) {
    if (control.hasError('required')) return 'Ce champ est requis';
    return '';
  }

  onSubmit() {
    if (this.problemeForm.invalid) return;

    this.problemeService.createProbleme(this.problemeForm.value).subscribe({
      next: res => {
        this.successMsg = 'Problème créé avec succès !';
        this.errorMsg = '';
        this.problemeForm.reset();
      },
      error: err => {
        this.errorMsg = 'Erreur lors de la création du problème';
        this.successMsg = '';
      }
    });
  }
}
