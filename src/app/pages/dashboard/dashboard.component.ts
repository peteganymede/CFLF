import { Component } from '@angular/core';
import { DashboardData} from '../../models/main.model'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  dashboardData = DashboardData



  getRandomYesNo(): string {
    return Math.random() < 0.5 ? 'Yes' : 'No';
  }

  getRandomColor(): string {
    const colors = ['#14A44D', '#DC4C64']; // Green and Red
    return colors[Math.floor(Math.random() * colors.length)];
  }
}

