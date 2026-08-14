import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Project } from '../../components/projects/projects.component';

@Component({
  selector: 'app-all-projects',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, NavbarComponent, FooterComponent],
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.css'
})
export class AllProjectsComponent implements OnInit {
  currentIndex: { [key: string]: number } = {};
  projects: Project[] = [];

  constructor(private http: HttpClient) {}

ngOnInit() {
  const apiUrl = 'https://api.github.com/repos/Luciano-Paniccia-Git/portfolio-federico-tripicchio/contents/public/content/proyectos';

  this.http.get<any[]>(apiUrl).subscribe(files => {
    const jsonFiles = files.filter(f => f.name.endsWith('.json'));

    jsonFiles.forEach(file => {
      this.http.get<Project>(`/content/proyectos/${file.name}`).subscribe(data => {
        const id = file.name.replace('.json', '');
        this.projects.push({ ...data, id });
        this.projects.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
      });
    });
  });
}

  getIndex(id: string): number {
    return this.currentIndex[id] ?? 0;
  }

  prev(id: string, total: number) {
    const current = this.getIndex(id);
    this.currentIndex[id] = current === 0 ? total - 1 : current - 1;
  }

  next(id: string, total: number) {
    const current = this.getIndex(id);
    this.currentIndex[id] = current === total - 1 ? 0 : current + 1;
  }

  goTo(id: string, index: number) {
    this.currentIndex[id] = index;
  }
}
