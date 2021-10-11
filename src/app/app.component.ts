import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clients';

  //par defut le app le component le plus grand (root)
  constructor( private userService:UserService,private router:Router){

           //elle va routourner l utlisateur courant a partir du Token qui est dans authService
       this.userService.getConnectUser().subscribe((user:any)=>{
         // test :si l 'utilisateur est null on fait une redirecttion si nn on Affecte l'utilisateur courrant 
          if(user){
                     //affecte l'utlisateur retourner par le back end au utlisatur courrant de l'application

            this.userService.connectUser(user)
          }else{
            this.router.navigate(['/login'])
          }
       })


  }
}
