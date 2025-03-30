import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule], // ✅ Add this line
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  cost: number = 0;
  quality: string = '';
  roundUp: boolean = false;

  constructor(private router: Router) {}

  onSubmit() {
    localStorage.setItem('tipData', JSON.stringify({
      cost: this.cost,
      quality: this.quality,
      roundUp: this.roundUp
    }));
    this.router.navigate(['/output']);
  }
}
