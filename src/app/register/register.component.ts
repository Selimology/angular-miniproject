import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../service/post.service';
import { IRegisterUser } from 'src/types/types';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService
  ) {}

  onSubmit(registerForm: IRegisterUser) {
    console.log(this.registerForm.value);
    this.postService.createUser(this.registerForm.value).subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
}
