import { Component } from '@angular/core';
import { ReadComponent } from "../read/read.component";

@Component({
  selector: 'app-news-end',
  standalone: true,
  imports: [ReadComponent],
  templateUrl: './news-end.component.html',
  styleUrl: './news-end.component.scss'
})
export class NewsEndComponent {

}
