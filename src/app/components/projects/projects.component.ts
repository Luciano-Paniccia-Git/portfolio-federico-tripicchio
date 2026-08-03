import { Component, signal } from '@angular/core';
import { NgFor, NgClass, NgIf } from '@angular/common';

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
  imports: [NgFor, NgClass, NgIf],
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
      description: 'Centro de atención médica especializada, formación académica y servicios complementarios en San Luis y Crespo, Santa Fe. Nuevo nodo sanitario e institucional para la ciudad.',
      longDesc: 'Proyecto académico para el diseño de un Centro de Especialidades Médicas de OSUNL, ubicado en la intersección de San Luis y Crespo, en la ciudad de Santa Fe. La propuesta concentra atención médica especializada, formación académica y servicios complementarios en un único conjunto arquitectónico. La implantación integra una nueva placa sanitaria con construcciones patrimoniales existentes, organizando el proyecto en torno a un patio central que estructura las circulaciones y favorece la iluminación y ventilación natural. Arquitectura contemporánea con hormigón visto, amplias superficies vidriadas y vegetación integrada.',
      tags: ['AutoCAD', 'Revit', 'D5 Render', 'Sketchup', 'Planimetría'],
      year: '2026',
      location: 'San Luis y Crespo, Santa Fe',
      images: ['images/salud/salud-1.jpg', 'images/salud/salud-2.jpg', 'images/salud/salud-3.jpg', 'images/salud/salud-4.jpg', 'images/salud/salud-5.jpg'],
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
      images: ['images/viviendas/viviendas-1.jpg', 'images/viviendas/viviendas-2.jpg'],
    },
    {
      id: 'colaboracion-rubio',
      category: 'Experiencia Profesional',
      name: 'Colaboración Arq. Rubio',
      description: 'Asistencia en proyectos reales junto a la Arq. Maria Eugenia Rubio. Documentación técnica, planos y presentaciones.',
      tags: ['AutoCAD', 'Revit', 'Documentación técnica', 'Planimetría'],
      year: 'Actualidad',
      location: 'Santa Fe, Argentina',
      images: ['images/rubio/rubio-1.jpg', 'images/rubio/rubio-2.jpg'],
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
