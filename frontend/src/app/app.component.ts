import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateUserProfileComponent } from './create-user-profile/create-user-profile.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateUserProfileComponent, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
