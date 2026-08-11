import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgFor],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  links: ContactLink[] = [
    {
      label: 'LinkedIn',
      value: 'Federico Tripicchio',
      href: 'https://www.linkedin.com/in/federico-tripicchio-4b55752b3/',
      icon: '💼',
    },
    {
      label: 'Instagram',
      value: '@fedetripicchio',
      href: 'https://www.instagram.com/fedetripicchio/',
      icon: '📸',
    },
    {
      label: 'TikTok',
      value: '@trf.arq',
      href: 'https://www.tiktok.com/@trf.arq',
      icon: '🎬',
    },
    {
      label: 'Email',
      value: 'federicotripicchio6@gmail.com',
      href: 'mailto:federicotripicchio6@gmail.com',
      icon: '✉️',
    },
    {
      label: 'Teléfono',
      value: '+54 3424296148',
      href: 'https://wa.me/5493424296148',
      icon: '📞',
    },
  ];
}
