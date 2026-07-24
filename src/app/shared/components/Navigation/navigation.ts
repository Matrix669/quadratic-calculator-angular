import { Component } from '@angular/core';
import { Wrapper } from '../Wrapper/wrapper';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
  imports: [Wrapper, RouterLink]
})
export class Navigation {}
