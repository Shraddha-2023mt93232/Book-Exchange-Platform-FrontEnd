import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-create-user-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-user-profile.component.html',
  styleUrl: './create-user-profile.component.css'
})
export class CreateUserProfileComponent {

  name: string ="";
  dateOfBirth: string ="";
  email: string ="";
  password: string ="";
  phone: string ="";
  gender: string ="";
  constructor(private http: HttpClient) 
  {
  }
  ngOnInit(): void
  {
  }
  register()
  {
    let bodyData = 
    {
      "name" : this.name,
      "dateOfBirth" : this.dateOfBirth,
      "email" : this.email,
      "password" : this.password,
      "phone" : this.phone,
      "gender" : this.gender,
    };
    this.http.post("http://localhost:8081/add/user",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("user Registered Successfully")
    });
  }
  save()
  {
    this.register();
  }

}
