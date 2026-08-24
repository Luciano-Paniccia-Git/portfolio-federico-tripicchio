import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

export interface SubProject {
  name: string;
  description: string;
  year: string;
  images: string[];
  tags: string[];
}

export interface ProjectDetail {
  id: string;
  name: string;
  category: string;
  description: string;
  year: string;
  location: string;
  tags: string[];
  images: string[];
  featured?: boolean;
  subprojects?: SubProject[];
}

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, NavbarComponent, FooterComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent implements OnInit {
  project: ProjectDetail | null = null;
  currentIndex: { [key: string]: number } = {};

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.http.get<ProjectDetail>(`/content/proyectos/${id}.json`).subscribe(data => {
        this.project = { ...data, id };
      });
    }
  }

  getIndex(key: string): number {
    return this.currentIndex[key] ?? 0;
  }

  prev(key: string, total: number) {
    const current = this.getIndex(key);
    this.currentIndex[key] = current === 0 ? total - 1 : current - 1;
  }

  next(key: string, total: number) {
    const current = this.getIndex(key);
    this.currentIndex[key] = current === total - 1 ? 0 : current + 1;
  }

  goTo(key: string, index: number) {
    this.currentIndex[key] = index;
  }
}
