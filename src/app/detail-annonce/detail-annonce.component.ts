import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-annonce',
  templateUrl: './detail-annonce.component.html',
  styleUrls: ['./detail-annonce.component.css'],
})
export class AdDetailsComponent {
  title: string = 'Recrutement de Formateurs pour les Cours Transversaux de la P12';
  discipline: string = 'Champ disciplinaire : Pôle/Direction';
  levelRequired: string = 'Niveau requis : Licence';
  requiredDocuments: string[] = [
    'Curriculum Vitae',
    'Lettre de motivation',
    'Attestation de travail',
    'Diplôme',
    'Autres',
  ];
  description: string = `
    OBJET : appel à candidature pour la sélection 
  `;
  modules: { name: string; objective: string; requirements: string[] }[] = [
    {
      name: 'Apprendre et connaître son université',
      objective: 'Permettre aux étudiants de mieux comprendre le fonctionnement de l’UN-CHK.',
      requirements: [
        'Minimum Bac +3 en Sciences',
      ],
    },
    {
      name: 'Leadership et développement personnel',
      objective:
        'Développer les compétences en leadership des étudiants et les sensibiliser aux principes de développement personnel.',
      requirements: [
        'Minimum Bac +3 en Psychologie, Gestion des ressources humaines, ou équivalent',
        'Expérience de 3 ans minimum en formation ou coaching',
        'Excellentes aptitudes en communication et pédagogie',
      ],
    },
    {
      name: 'Initiation à l’informatique',
      objective:
        'Initier les étudiants aux bases de l’informatique et à l’Environnement Numérique de Travail.',
      requirements: [
        'Minimum Bac +5 en Informatique ou discipline connexe',
        'Expérience de 2 ans en enseignement des bases de l’informatique',
        'Maîtrise des outils bureautiques et des plateformes d’apprentissage en ligne',
      ],
    },
  ];
  closingDate: string = '05/01/2025'; // Date de clôture
}
