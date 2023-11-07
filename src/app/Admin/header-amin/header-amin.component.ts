import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header-amin',
  templateUrl: './header-amin.component.html',
  styleUrls: ['./header-amin.component.css']
})
export class HeaderAminComponent {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) {}

  ngOnInit(): void { 

}
  toggleSidebarA() {
    this.toggleSidebarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
}
