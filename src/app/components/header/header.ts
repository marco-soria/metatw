import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
})
export class Header {
  menuQuest = false;
  menuRayBan = false;
  menuAsistencia = false;

  onMouseOver(menu: 'quest' | 'rayban' | 'asistencia') {
    switch (menu) {
      case 'quest':
        this.menuQuest = true;
        break;
      case 'rayban':
        this.menuRayBan = true;
        break;
      case 'asistencia':
        this.menuAsistencia = true;
        break;
    }
  }

  onMouseOut(menu: 'quest' | 'rayban' | 'asistencia') {
    switch (menu) {
      case 'quest':
        this.menuQuest = false;
        break;
      case 'rayban':
        this.menuRayBan = false;
        break;
      case 'asistencia':
        this.menuAsistencia = false;
        break;
    }
  }
}
