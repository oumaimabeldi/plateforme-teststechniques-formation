import { Component, OnInit } from '@angular/core';
import { AttributionService } from '../services/attribution.service';

@Component({
  selector: 'app-resultats-candidats',
  templateUrl: './resultats-candidats.component.html',
  styleUrl: './resultats-candidats.component.css'
})
export class ResultatsCandidatsComponent implements OnInit {
  assignments: any[] = [];
  filteredAssignments: any[] = [];
  searchTerm: string = '';

  constructor(private attributionService: AttributionService) {}

  ngOnInit(): void {
    this.loadAssignments();
  }

  loadAssignments(): void {
    this.attributionService.getAllAssignments().subscribe({
      next: (data) => {
        this.assignments = data;
        this.filteredAssignments = data;
      },
      error: (err) => console.error(err)
    });
  }

  search(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredAssignments = this.assignments.filter(a =>
      a.user?.name?.toLowerCase().includes(term)
    );
  }

  deleteAssignment(id: number): void {
    if (confirm("Voulez-vous vraiment supprimer ce test assigné ?")) {
      this.attributionService.deleteAssignment(id).subscribe({
        next: () => this.loadAssignments(),
        error: (err) => console.error(err)
      });
    }
  }

}
