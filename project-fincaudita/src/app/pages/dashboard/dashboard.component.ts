import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
<<<<<<< HEAD
import { Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MenuComponent, RouterOutlet,],
=======
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MenuComponent, RouterOutlet],
>>>>>>> 8f0fea395f43f4ae6773b19a925ccf13b8152c0c
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
