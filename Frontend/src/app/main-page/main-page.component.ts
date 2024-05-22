import { Component, OnInit } from '@angular/core';
import { DemoNews, DemoNewsService } from '../services/demo-news.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NewCardComponent } from '../new-card/new-card.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, NewCardComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit {
  news: DemoNews[] = []

  constructor(private newsService: DemoNewsService, private router: Router) { }

  ngOnInit(): void {
    this.news = this.newsService.getNews();
  }

  goToDetail(id: number): void {
    this.router.navigate(['/news', id]);
  }
}
