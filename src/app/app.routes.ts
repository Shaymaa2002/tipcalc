import { Routes } from '@angular/router';
import { InputComponent } from './pages/input/input.component';
import { OutputComponent } from './pages/output/output.component';

export const routes: Routes = [
  { path: '', component: InputComponent },
  { path: 'output', component: OutputComponent }
];
