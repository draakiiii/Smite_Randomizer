import { Component, OnInit } from '@angular/core';
import { God } from 'src/app/models/god';
import { GodsService } from 'src/app/services/gods.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private godService: GodsService) { }

  gods: God[] = [];
  godName: string = "";
  roleName: string = "";
  roles: string[] = ['All', 'Mage', 'Hunter', 'Assassin', 'Warrior', 'Guardian'];
  selectedRoles: string[] = ['All'];

  ngOnInit(): void {
    this.gods = this.godService.getGods();
  }

  onRoleSelect() {
    const filteredGods = this.gods.filter(god => {
      if (this.selectedRoles.includes('All')) {
        return true;
      }
      return this.selectedRoles.includes(god.role);
    });

    const randomIndex = Math.floor(Math.random() * filteredGods.length);
    this.godName = filteredGods[randomIndex].name;
    this.roleName = filteredGods[randomIndex].role;
  }

}