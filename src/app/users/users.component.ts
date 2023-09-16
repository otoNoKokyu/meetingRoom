import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

constructor(private userServiice: UserServiceService){}
userList : any[] = []

  ngOnInit(): void {
     this.userServiice.getUsers().subscribe(data=>{
      this.userList = data
    })
  }

}
