import { Component } from '@angular/core';
import { NewsTopComponent } from "../../components/news-top/news-top.component";
import { NewsmiddleComponent } from "../../components/newsmiddle/newsmiddle.component";
import { NewsEndComponent } from "../../components/news-end/news-end.component";
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NewsTopComponent, NewsmiddleComponent, NewsEndComponent, ModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
