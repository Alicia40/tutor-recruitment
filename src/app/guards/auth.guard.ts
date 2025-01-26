import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root' // Déclare ce service comme injectable au niveau global
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Vérifie si l'utilisateur est authentifié
    if (!this.authService.isAuthenticated()) {
      // Redirige l'utilisateur vers la page de connexion
      this.router.navigate(['/auth/connexion'], {
        queryParams: { returnUrl: state.url } // Permet de rediriger l'utilisateur après connexion
      });
      return false;
    }

    // Si des rôles sont définis dans les données de la route, vérifier les autorisations
    if (next.data?.roles) {
      const requiredRoles: string[] = next.data.roles;

      // Vérifie si l'utilisateur possède au moins un des rôles requis
      const hasRequiredRole = requiredRoles.some(role => this.authService.hasRole(role));
      if (!hasRequiredRole) {
        // Redirection vers une page non autorisée ou d'erreur
        this.router.navigate(['/not-authorized']);
        return false;
      }
    }

    // Si toutes les vérifications passent, l'utilisateur peut accéder à la route
    return true;
  }
}
