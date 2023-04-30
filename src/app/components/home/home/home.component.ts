import { Component, OnInit } from '@angular/core';
import { God } from 'src/app/models/god';
import { GodsService } from 'src/app/services/gods.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private godService: GodsService ){ }

  gods: God[] = [];
  /* randomGod: string = ""; */
  godName: string = "";
  roleName: string = "";

  ngOnInit(): void {
    this.gods = this.godService.getGods();
  }

  onRoleSelect(role: string){
    console.log(role);
    if (role != "All") {
      // Filtrar los dioses por rol
      const filteredGods = this.gods.filter(god => god.role.includes(role));
      // Seleccionar un dios aleatorio de la lista filtrada
      const randomIndex = Math.floor(Math.random() * filteredGods.length);

      this.godName = filteredGods[randomIndex].name;
      this.roleName = filteredGods[randomIndex].role;

      /* this.randomGod = this.godName  + " - " + this.roleName; */

    }else{
      // All gods
      const randomIndex = Math.floor(Math.random() * this.gods.length);

      this.godName = this.gods[randomIndex].name;
      this.roleName = this.gods[randomIndex].role;

      /* this.randomGod = this.godName  + " - " + this.roleName; */

    }
    
  }

}