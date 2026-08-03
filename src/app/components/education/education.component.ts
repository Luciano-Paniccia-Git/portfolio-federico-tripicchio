import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface EducationItem {
  year: string;
  title: string;
  institution: string;
  description?: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [NgFor],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  items: EducationItem[] = [
    {
      year: '2021 — Actualidad',
      title: 'Arquitectura y Urbanismo',
      institution: 'FADU · Universidad Nacional del Litoral · Santa Fe',
      description: 'Estudiante avanzado orientado a la práctica profesional. Integración de diseño, técnica y gestión en proyectos reales.',
    },
    {
      year: '2025',
      title: 'Curso Revit Arquitectura',
      institution: 'European School of Architecture',
    },
    {
      year: '2008 — 2020',
      title: 'Educación Primaria y Secundaria',
      institution: 'Colegio Inmaculada Concepción · Santa Fe',
    },
  ];
}
