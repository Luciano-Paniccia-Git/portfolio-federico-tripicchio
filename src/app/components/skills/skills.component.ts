import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface SkillItem {
  name: string;
  level: number;
}

interface SkillGroup {
  category: string;
  skills: SkillItem[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  groups: SkillGroup[] = [
    {
      category: 'Software de Diseño & 3D',
      skills: [
        { name: 'AutoCAD', level: 5 },
        { name: 'Revit Architecture', level: 5 },
        { name: 'Sketchup', level: 5 },
        { name: 'Archicad', level: 4 },
        { name: 'D5 Render', level: 4 },
        { name: 'Twinmotion', level: 3 },
      ]
    },
    {
      category: 'Software de Diseño Gráfico',
      skills: [
        { name: 'Adobe Illustrator', level: 4 },
        { name: 'Adobe Photoshop', level: 3 },
        { name: 'Canva', level: 2 },
      ]
    },
    {
      category: 'Software de Oficina',
      skills: [
        { name: 'Microsoft Excel', level: 4 },
        { name: 'Microsoft PowerPoint', level: 3 },
        { name: 'Microsoft Word', level: 3 },
      ]
    },
  ];

  getDots(level: number): number[] {
    return Array(5).fill(0).map((_, i) => i < level ? 1 : 0);
  }
}
