import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // Import nécessaire pour la gestion des routes
  template: `
    <div >
      <header>
  
      </header>
      <main>
        <router-outlet></router-outlet> <!-- Affiche les composants selon la route -->
      </main>
      <footer>
        
      </footer>
    </div>
  `,
  
})
export class AppComponent {}
