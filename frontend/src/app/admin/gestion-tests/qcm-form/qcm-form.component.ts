import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QcmService } from '../../services/qcm.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-qcm-form',
  templateUrl: './qcm-form.component.html',
  styleUrls: ['./qcm-form.component.css']
})
export class QcmFormComponent {
  qcmForm: FormGroup;
  successMsg = '';
  errorMsg = '';
  

  constructor(private fb: FormBuilder, private qcmService: QcmService,    private authService: AuthService) {
    this.qcmForm = this.fb.group({
      titre: ['', Validators.required],
      questions: this.fb.array([this.initQuestion()])
    });
  }

  // --- Getters ---
  get questions() {
    return this.qcmForm.get('questions') as FormArray;
  }
  getOptions(question: AbstractControl): FormArray {
    return question.get('options') as FormArray;
  }

  // --- Initialisation ---
  initQuestion(): FormGroup {
    return this.fb.group({
      enonce: ['', Validators.required],
      options: this.fb.array([
        this.fb.control('', Validators.required),
        this.fb.control('', Validators.required)
      ]),
      bonneReponse: [0, Validators.required]
    });
  }

  // --- Gestion des questions ---
  addQuestion() {
    this.questions.push(this.initQuestion());
  }
  removeQuestion(index: number) {
    if (this.questions.length > 1) {
      this.questions.removeAt(index);
    }
  }

  // --- Gestion des options ---
  addOption(question: AbstractControl) {
    this.getOptions(question).push(this.fb.control('', Validators.required));
  }
  removeOption(question: AbstractControl, index: number) {
    if (this.getOptions(question).length > 2) {
      this.getOptions(question).removeAt(index);
    }
  }

  // --- Validation / erreurs ---
  getError(control: AbstractControl | null): string {
    if (control?.hasError('required')) return 'Ce champ est obligatoire';
    return '';
  }

  // --- Soumission ---
  onSubmit() {
    if (this.qcmForm.invalid) {
      this.errorMsg = 'Veuillez remplir correctement tous les champs.';
      return;
    }
   
    this.qcmService.createQcm(this.qcmForm.value).subscribe({
      next: () => {
        this.successMsg = 'QCM créé avec succès ✅';
        this.errorMsg = '';
        this.qcmForm.reset();
        this.questions.clear();
        this.addQuestion();
      },
      error: () => {
        this.errorMsg = 'Erreur lors de la création du QCM ❌';
        this.successMsg = '';
      }
    });
  }
}
