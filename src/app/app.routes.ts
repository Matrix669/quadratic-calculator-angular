import { HomePage } from '@/app/feature/home/home.page';
import { Routes } from '@angular/router';
import { GeneralFunction } from '@/app/feature/general-function/general-function.page';
import { CanonicalFunction } from '@/app/feature/canonical-function/canonical-function.page';
import { ProductFunction } from '@/app/feature/product-function/product-function.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'postac-ogolna',
    component: GeneralFunction,
  },
  {
    path: 'postac-kanoniczna',
    component: CanonicalFunction,
  },
  {
    path: 'postac-iloczynowa',
    component: ProductFunction,
  },
];
