import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { navListType } from "../../Types/nav";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() sendNavLists!: navListType[];
  @Input() sendPageTitle!: string;
  @Input() sendIsActive!: boolean;

  @Output() newPageTitle = new EventEmitter<string>();
  actionList(titlePage: string) {
    console.log('titlePage', titlePage)
    this.newPageTitle.emit(titlePage);
  }
}
