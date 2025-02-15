import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsTopComponent } from './components/news-top/news-top.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
];
