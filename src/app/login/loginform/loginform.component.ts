import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {

logform:FormGroup;




  constructor() { }

  ngOnInit() {
    this.logform = new FormGroup({
      uname: new FormControl('',Validators.required),
      psw: new FormControl('',[Validators.required,Validators.minLength(6)])
    });
  }
  onclick(){
    const loginArray={
      uname:this.logform.get('uname').value,
      psw:this.logform.get('psw').value

    };

    var local=JSON.parse(localStorage.getItem('regArray'));

    if(loginArray.uname==local.uname && loginArray.psw==local.psw){
      alert("you are succesfully login");
      
      
    }
    else{
      alert("data can't be matched");
      
    }
    
  }
  

}
