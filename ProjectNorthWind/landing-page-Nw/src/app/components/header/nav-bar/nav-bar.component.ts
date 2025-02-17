import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule, NgbCollapseModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  isMenuCollapsed = true;

  constructor(private router: Router) {}

  fixNavbar(): boolean {
    const currentRoute = this.router.url;
    switch (currentRoute) {
      case '/map':
        return false;
      default:
        return true;
    }
  }

  goToMap() {
    this.isMenuCollapsed = true;
    this.router.navigate(['/map']);
  }
}
