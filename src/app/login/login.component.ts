import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  stepForm3: FormGroup;
  stepForm2: FormGroup;
  stepForm4: FormGroup;
  step: number = 1;
  submitted = false;
  submittedStep2 = false;

  submittedStep3 = false;
  submittedStep4 = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      role: ['', Validators.required],
      number: ['', Validators.compose([Validators.required, Validators.minLength(9), Validators.maxLength(9)])],
    });

  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.step++;
    if (this.step == 2) this.loginForm.addControl('proposalNumber', new FormControl('', Validators.required));
    this.stepForm2 = this.formBuilder.group({
      checkbox: ['', Validators.required],
    });
    // console.log(this.step)

    console.log(this.loginForm.value)
  }

  get f2() { return this.stepForm2.controls; }

  submitAfterStep2() {
    this.submittedStep2 = true;
    if (this.stepForm2.invalid) {
      return;
    }

    this.step++;
    this.stepForm3 = this.formBuilder.group({
      verificationCode: ['', Validators.required],
    });
    // console.log(this.step)

    console.log(this.stepForm2.value)
  }


  get f3() { return this.stepForm3.controls; }

  submitAfterStep3() {
    this.submittedStep3 = true;
    if (this.stepForm3.invalid) {
      return;
    }

    this.step++;
    this.stepForm4 = this.formBuilder.group({
      checkbox1: ['', Validators.required],
      checkbox2: ['', Validators.required],
      checkbox3: ['', Validators.required],

    });

    // console.log(this.step)

    console.log(this.stepForm3.value)
  }

  get f4() { return this.stepForm4.controls; }

  submitAfterStep4() {
    this.submittedStep4 = true;
    if (this.stepForm4.invalid) {
      return;
    }

    this.step++;

   console.log("all form fields => ",Object.assign(this.loginForm.value,this.stepForm2.value,this.stepForm3.value,this.stepForm4.value))
  }
}
