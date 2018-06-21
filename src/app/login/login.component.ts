import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { 
    
  }
  UserName="";
  password="";
  ngOnInit() {
  }
  onClickSubmit()
  {
    debugger;
    this.newMethod();
  }

  private newMethod() {
    console.log(this.UserName, this.password);
    if(this.UserName=="admin" && this.password=="admin")
    {
      this.router.navigate(['busdetails']);
    }
  }
}
