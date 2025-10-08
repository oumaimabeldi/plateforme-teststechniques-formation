import { Component, OnInit } from '@angular/core';
import { CandidatService } from '../services/candidat.service';

@Component({
  selector: 'app-gestion-candidats',
  templateUrl: './gestion-candidats.component.html',
  styleUrl: './gestion-candidats.component.css'
})
export class GestionCandidatsComponent implements OnInit {
  candidats: any[] = [];
  newCandidat = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private candidatService: CandidatService) {}

  ngOnInit(): void {
    this.getCandidats();
  }

  getCandidats() {
    this.candidatService.getCandidats().subscribe(data => {
      this.candidats = data;
    });
  }

 addCandidat() {
  this.candidatService.addCandidat(this.newCandidat).subscribe((createdCandidat) => {
    this.candidats.push(createdCandidat);
    this.newCandidat = { name: '', email: '', password: '' };
  });
}

editingCandidat: any = null;

editCandidat(candidat: any) {
  this.editingCandidat = { ...candidat, password: '' };
}

updateCandidat() {
  const { id, ...data } = this.editingCandidat;

  this.candidatService.updateCandidat(id, data).subscribe(() => {
    this.getCandidats();
    this.editingCandidat = null;
  });
}
deleteCandidat(id: number) {
  if (confirm('Voulez-vous vraiment supprimer ce candidat ?')) {
    this.candidatService.deleteCandidat(id).subscribe(() => {
      this.getCandidats();
    });
  }
}
resetPassword(id: number) {
  if (confirm('Réinitialiser le mot de passe de ce candidat ?')) {
    this.candidatService.resetPassword(id).subscribe((res: any) => {
      alert(`Nouveau mot de passe : ${res.newPassword}`);
      this.getCandidats();
    });
  }
}


}
