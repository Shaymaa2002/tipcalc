import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  cost: number = 0;
  quality: string = '';
  roundUp: boolean = false;
  tip: number = 0;
  total: number = 0;

  ngOnInit(): void {
    const data = localStorage.getItem('tipData');
    if (data) {
      const parsed = JSON.parse(data);
      this.cost = parsed.cost;
      this.quality = parsed.quality;
      this.roundUp = parsed.roundUp;

      const percent = this.getTipPercent(this.quality);
      let calculatedTip = this.cost * percent;

      this.tip = this.roundUp ? Math.ceil(calculatedTip) : +calculatedTip.toFixed(2);
      this.total = +this.cost + this.tip;
    }
  }

  getTipPercent(quality: string): number {
    switch (quality) {
      case 'okey': return 0.15;
      case 'good': return 0.18;
      case 'excellent': return 0.20;
      default: return 0;
    }
  }
}
