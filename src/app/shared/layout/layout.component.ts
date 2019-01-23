import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { LayoutService } from './service/layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  menuDs: Menu[];
  subMenu: Menu;
  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
    this.layoutService.getMenuList().subscribe(data => {
      this.menuDs = data;
    });
  }

  getSubMenu(menu: Menu) {
    console.log(menu.childMenus);
    this.subMenu = menu.childMenus;
    // this.subMenu = this.menuDs.filter(m => m.id === menu.id);
  }

}
