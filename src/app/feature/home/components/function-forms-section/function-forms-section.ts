import { Component } from '@angular/core';
import { FunctionCard } from '../function-card/function-card';
import { Wrapper } from '@/app/shared/ui/wrapper/wrapper';

@Component({
  selector: 'app-function-forms-section',
  imports: [FunctionCard, Wrapper],
  templateUrl: './function-forms-section.html',
  styleUrl: './function-forms-section.scss',
})
export class FunctionFormsSection {
  functionForms = [
    {
      title: 'Postać ogólna',
      description: 'Standardowy zapis trójmianu kwadratowego, najczęściej spotykany w zadaniach.',
      pattern: 'f(x) = ax² + bx + c',
      path: '/postac-ogolna',
    },
    {
      title: 'Postać kanoniczna',
      description: 'Ułatwia wyznaczenie współrzędnych wierzchołka paraboli (p, q).',
      pattern: 'f(x) = a(x-p)² + q',
      path: '/postac-kanoniczna',
      cssType: 'canonical'
    },
    {
      title: 'Postać iloczynowa',
      description: 'Bezpośrednio wskazuje na miejsca zerowe funkcji kwadratowej..',
      pattern: 'f(x) = a(x-x₁)(x-x₂)',
      path: '/postac-iloczynowa',
      cssType: 'product'
    },
  ];
}
