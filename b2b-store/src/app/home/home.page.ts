import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  home: any;

  constructor(private data: DataService, private router: Router) {}

  ionViewWillEnter(): void {
    this.data.getHome().subscribe((h: any) => this.home = h);
  }

  openCategory(id: string): void {
    this.router.navigate(['/category', id]);
  }

  openProduct(id: string): void {
    this.router.navigate(['/product', id]);
  }
}
