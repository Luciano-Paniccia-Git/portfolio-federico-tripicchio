import { Component } from '@angular/core';
import { NgFor, NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface Project {
  id: string;
  category: string;
  name: string;
  description: string;
  longDesc?: string;
  tags: string[];
  year: string;
  location: string;
  images: string[];
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgClass, NgIf, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  currentIndex: { [key: string]: number } = {};

  projects: Project[] = [
    {
      id: 'edificio-salud',
      category: 'Proyecto Académico',
      name: 'Centro de Especialidades Médicas OSUNL',
      description: 'Centro de atención médica especializada, formación académica y servicios complementarios en San Luis y Crespo, Santa Fe.',
      longDesc: 'Proyecto académico para el diseño de un Centro de Especialidades Médicas de OSUNL, ubicado en la intersección de San Luis y Crespo, en la ciudad de Santa Fe. La propuesta concentra atención médica especializada, formación académica y servicios complementarios en un único conjunto arquitectónico, consolidando un nuevo nodo sanitario e institucional para la ciudad.',
      tags: ['AutoCAD', 'Revit', 'D5 Render', 'Sketchup', 'Planimetría'],
      year: '2026',
      location: 'San Luis y Crespo, Santa Fe',
      images: [
        'images/salud/salud-1.jpg',
        'images/salud/salud-2.jpg',
        'images/salud/salud-3.jpg',
        'images/salud/salud-4.jpg',
        'images/salud/salud-5.jpg',
        'images/salud/salud-6.jpg',
        'images/salud/salud-7.jpg',
      ],
      featured: true,
    },
    {
      id: 'conjunto-viviendas',
      category: 'Proyecto Académico',
      name: 'Conjunto de Viviendas',
      description: 'Diseño de conjunto habitacional con enfoque en integración urbana, espacios comunes y calidad de vida.',
      tags: ['Archicad', 'AutoCAD', 'Twinmotion', 'Planimetría'],
      year: '2024',
      location: 'Santa Fe, Argentina',
      images: [
        'images/viviendas/vivienda-1.jpg',
        'images/viviendas/vivienda-2.jpg',
        'images/viviendas/vivienda-3.jpg',
        'images/viviendas/vivienda-4.jpg',
        'images/viviendas/vivienda-5.jpg',
        'images/viviendas/vivienda-6.jpg',
      ],
    },
    {
      id: 'colaboracion-rubio',
      category: 'Experiencia Profesional',
      name: 'Colaboración Arq. Rubio',
      description: 'Asistencia en proyectos reales junto a la Arq. Maria Eugenia Rubio. Documentación técnica, planos y presentaciones.',
      tags: ['AutoCAD', 'Revit', 'Documentación técnica', 'Planimetría'],
      year: 'Actualidad',
      location: 'Santa Fe, Argentina',
      images: [
        'images/rubio/rubio-1.jpg',
        'images/rubio/rubio-2.jpg',
        'images/rubio/rubio-3.jpg',
        'images/rubio/rubio-4.jpg',
        'images/rubio/rubio-5.jpg',
        'images/rubio/rubio-6.jpg',
        'images/rubio/rubio-7.jpg',
        'images/rubio/rubio-8.jpg',
        'images/rubio/rubio-9.jpg',
        'images/rubio/rubio-10.jpg',
        'images/rubio/rubio-11.jpg',
      ],
    },
  ];

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