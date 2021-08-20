import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginList = [{ name: "Yashraj Dawkhar", pass: "Yashraj@19" },
   { name: "Tejas Dawkhar", pass: "Tejas@67" },{name:"Ganpati",pass:"Ganpati@12"},{name:"Piyush Marbhal",pass:"Piyush@55"}]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  loginInfo = new FormGroup({
    Name: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required)
  })


  alert: boolean = false

  LoginDetails(data: any) {

    let userName = data.Name.trim()
    let pass = data.Password.trim()

    for (let i in this.loginList) {
      if (userName === this.loginList[i].name && pass === this.loginList[i].pass) {

        sessionStorage.setItem("UserName", userName)
        sessionStorage.setItem("Password", pass)
        this.router.navigateByUrl('/dashboard')
      }
    }
    
    setTimeout(() => {
      this.alert = true
      this.loginInfo.reset()
    },1000);
    

  }

}
