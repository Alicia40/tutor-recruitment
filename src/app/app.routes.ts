import { Routes } from '@angular/router';

export const routes: Routes = [
  // Module Authentification
  { 
    path: 'auth', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  
  // Module Candidat
  { 
    path: 'candidate', 
    loadChildren: () => import('./candidate/candidate.module').then(m => m.CandidateModule)
  },

  // Module Administrateur
  { 
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },

  // Redirection vers la page de connexion par défaut
  { 
    path: '', 
    redirectTo: '/auth/connexion', 
    pathMatch: 'full'
  },

  // Gestion des routes inexistantes
  { 
    path: '**', 
    redirectTo: '/auth/connexion' 
  }
];
