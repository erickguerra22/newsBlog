import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-card',
  standalone: true,
  imports: [],
  templateUrl: './new-card.component.html',
  styleUrl: './new-card.component.css'
})
export class NewCardComponent {
  @Input() title!: string;
  @Input() content!: string;
  @Input() banner!: string;
  @Input() publishDate!: Date;

  formatDate(date: Date): string {
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}
