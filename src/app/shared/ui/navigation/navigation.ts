import { Component } from '@angular/core';
import { Wrapper } from '../wrapper/wrapper';
import { Logo } from '@/app/shared/ui/logo/logo';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
  imports: [Wrapper, Logo],
})
export class Navigation {}
