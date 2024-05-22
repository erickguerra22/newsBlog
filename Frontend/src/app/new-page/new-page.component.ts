import { Component } from '@angular/core';
import { DemoNews, DemoNewsService } from '../services/demo-news.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-new-page',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.css'
})
export class NewPageComponent {
  new: DemoNews | undefined;
  banner: string | undefined;
  id = Number(this.route.snapshot.paramMap.get('id'));

  constructor(private route: ActivatedRoute, private demoNewsService: DemoNewsService) { }

  ngOnInit(): void {
    this.new = this.demoNewsService.getNewById(this.id);
    this.banner = this.new?.banner
  }

  formatDate(date: Date): string {
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}
