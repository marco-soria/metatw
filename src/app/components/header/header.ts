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

  private questTimer: any = null;
  private raybanTimer: any = null;
  private asistenciaTimer: any = null;

  onMouseOver(menu: 'quest' | 'rayban' | 'asistencia') {
    // Cancelar cualquier timer pendiente para este menú
    this.clearTimer(menu);

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
    // Agregar delay de 300ms antes de cerrar el menú
    switch (menu) {
      case 'quest':
        this.questTimer = setTimeout(() => {
          this.menuQuest = false;
        }, 300);
        break;
      case 'rayban':
        this.raybanTimer = setTimeout(() => {
          this.menuRayBan = false;
        }, 300);
        break;
      case 'asistencia':
        this.asistenciaTimer = setTimeout(() => {
          this.menuAsistencia = false;
        }, 300);
        break;
    }
  }

  private clearTimer(menu: 'quest' | 'rayban' | 'asistencia') {
    switch (menu) {
      case 'quest':
        if (this.questTimer) {
          clearTimeout(this.questTimer);
          this.questTimer = null;
        }
        break;
      case 'rayban':
        if (this.raybanTimer) {
          clearTimeout(this.raybanTimer);
          this.raybanTimer = null;
        }
        break;
      case 'asistencia':
        if (this.asistenciaTimer) {
          clearTimeout(this.asistenciaTimer);
          this.asistenciaTimer = null;
        }
        break;
    }
  }
}
