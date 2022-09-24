import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
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
  });
});
