import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];

  public items: Array<{ title: string; note: string; icon: string, link: string }> = [];
  constructor() {
    this.items.push(this.itemFactory('categorie', 'pricetags', 'categtorie'));
    this.items.push(this.itemFactory('pagamenti', 'cash', 'pagamenti'));
    this.items.push(this.itemFactory('fornitori', 'people', 'fornitori'));
    this.items.push(this.itemFactory('carrelli della spesa', 'cart', 'home'));
    this.items.push(this.itemFactory('grafici', 'stats', 'grafici'));
  }

  itemFactory(title, icon, link) {
    return { 'title': title, 'icon': icon, 'note': '', link: link };
  }
  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
