import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css'
})
export class LoginUserComponent {
  email: string = '';
  password: string = '';
  isLogin: boolean = true;
  erroMessage: string = "";
  constructor(private router: Router,private http: HttpClient) {}
  login() {
    console.log(this.email);
    console.log(this.password);
    let bodyData = {
      email: this.email,
      password: this.password,
    };
        this.http.post("http://localhost:8081/login", bodyData).subscribe(  (resultData: any) => {
        console.log(resultData);
        if (resultData.valid) 
        {
      
           this.router.navigateByUrl('/home');
    
        } 
        else
         {
          alert("Incorrect Email or Password");
          console.log("Errror login");
        }
      });
    }
}
