export interface Attribution {
  id: number;
  completed: boolean;
  score?: number;
  assignedAt: string;
  completedAt?: string;
  deadline?: string;
  qcm?: {
    id: number;
    titre: string;
    description: string;
  };
  probleme?: {
    id: number;
    titre: string;
    description: string;
  };
}
