// src/app/ad-details/ad-details.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-annonce',
  templateUrl: './detail-annonce.component.html',
  styleUrls: ['./detail-annonce.component.css'],
})
export class AdDetailsComponent {
  title = 'Recrutement de Formateurs pour les Cours Transversaux de la P12';
  discipline = 'Champ disciplinaire :';
  levelRequired = 'Niveau requis : Licence';
  requiredDocuments = [
    'Curriculum Vitae',
    'Lettre de motivation',
  
    'Diplôme',
    'Autres'
  ];
  description = `
    OBJET : appel à candidature 

  `;
}
