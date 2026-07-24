import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-main-link',
  imports: [RouterLink],
  templateUrl: './main-link.html',
  styleUrl: './main-link.scss',
})
export class MainLink {
  to = input.required<string>()
}
