import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AllProjectsComponent } from './pages/all-projects/all-projects.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'proyectos', component: AllProjectsComponent },
  { path: 'proyectos/:id', component: ProjectDetailComponent },
  { path: '**', redirectTo: '' }
];
