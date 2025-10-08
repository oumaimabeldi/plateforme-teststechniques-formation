import { Component, OnInit } from '@angular/core';
import { CollaborateurService } from '../services/collaborateur.service';

@Component({
  selector: 'app-gestion-collaborateurs',
  templateUrl: './gestion-collaborateurs.component.html',
  styleUrl: './gestion-collaborateurs.component.css'
})
export class GestionCollaborateursComponent implements OnInit {
  collaborateurs: any[] = [];
  newCollaborateur = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private collaborteurService: CollaborateurService) {}

  ngOnInit(): void {
    this.getCollaborateurs();
  }

  getCollaborateurs() {
    this.collaborteurService.getCollaborateurs().subscribe(data => {
      this.collaborateurs = data;
    });
  }

 addCollaborateur() {
  this.collaborteurService.addCollaborateur(this.newCollaborateur).subscribe((createdCollaborateur) => {
    this.collaborateurs.push(createdCollaborateur);
    this.newCollaborateur = { name: '', email: '', password: '' };
  });
}

editingCollaborateur: any = null;

editCollaborateur(collaborateur: any) {
  this.editingCollaborateur = { ...collaborateur, password: '' };
}

updateCollaborateur() {
  const { id, ...data } = this.editingCollaborateur;

  this.collaborteurService.updateCollaborateur(id, data).subscribe(() => {
    this.getCollaborateurs();
    this.editingCollaborateur = null;
  });
}
deleteCollaborateur(id: number) {
  if (confirm('Voulez-vous vraiment supprimer ce candidat ?')) {
    this.collaborteurService.deleteCollaborateur(id).subscribe(() => {
      this.getCollaborateurs();
    });
  }
}
resetPassword(id: number) {
  if (confirm('Réinitialiser le mot de passe de ce candidat ?')) {
    this.collaborteurService.resetPassword(id).subscribe((res: any) => {
      alert(`Nouveau mot de passe : ${res.newPassword}`);
      this.getCollaborateurs();
    });
  }
}
}
