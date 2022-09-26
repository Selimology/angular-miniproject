import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../service/post.service';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let service: PostService;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;
  let fixture: ComponentFixture<RegisterComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule],
      providers: [PostService],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
    service = TestBed.inject(PostService);
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Layout', () => {
    it('has register title', () => {
      const register = fixture.nativeElement as HTMLElement;
      const title = register.querySelector('h1');
      expect(title?.textContent).toBe('Register');
    });

    it('has a submit button', () => {
      const register = fixture.nativeElement as HTMLElement;
      const button = register.querySelector('button');
      expect(button?.textContent).toBe('Register');
    });
  });
  describe('Interactions', () => {
    it('has form invalid when empty', () => {
      expect(component.registerForm.valid).toBeFalsy();
    });

    it('username field validity', () => {
      let username = component.registerForm.controls['username'];
      expect(username.valid).toBeFalsy();
      username.setValue('');
      expect(username.hasError('required')).toBeTruthy();
    });

    it('password field validity', () => {
      let password = component.registerForm.controls['password'];
      expect(password.valid).toBeFalsy();
      password.setValue('');
      expect(password.hasError('required')).toBeTruthy();
    });

    it('email field validity', () => {
      let email = component.registerForm.controls['email'];
      expect(email.valid).toBeFalsy();
      email.setValue('');
      expect(email.hasError('required')).toBeTruthy();
    });

    it('send username,password,email to server', () => {
      const req = httpMock.expectOne('/api/1.0/users');
      const requestMethod = req.request.method === 'POST';
      const requestBody = req.request.body;
      expect(requestBody).toEqual({
        username: 'test',
        password: 'test',
        email: 'test@test.com',
      });
    });
  });
});
