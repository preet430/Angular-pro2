import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent implements OnInit {
logform:FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.logform = new FormGroup({
      uname: new FormControl('',Validators.required),
      psw: new FormControl('',[Validators.required,Validators.minLength(6)]),
      email: new FormControl('',[Validators.required,Validators.email])
    });

   
  }

  onclick(){

    this.router.navigate(['/login']);

    const regArray={
      uname:this.logform.get('uname').value,
      psw:this.logform.get('psw').value
   };
   localStorage.setItem('regArray',JSON.stringify(regArray));

  }

}
