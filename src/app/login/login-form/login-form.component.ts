import { UserSessionService } from './user-session.service';
import { LoginFormService } from './login-form.service';
import { LoginFormModel } from './login-form.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserSession } from './user-session.model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  constructor(
    private loginFormService: LoginFormService,
    private userSessionService: UserSessionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  formData = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  result: LoginFormModel;

  ngOnInit() {
    this.formData.reset();
  }

  login() {
    this.loginFormService.getProfile().subscribe((res: LoginFormModel) => {
      const data: UserSession = {
        username: res.username,
        loged: 'true'
      };
      if (
        res.username === this.formData.value.username &&
        res.password === this.formData.value.password
      ) {
        this.userSessionService.setUser(data);
        this.router.navigate(['/home']);
      } else {
        data.loged = 'false';
        this.userSessionService.setUser(data);
      }
    });
  }
}
