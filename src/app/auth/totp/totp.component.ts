import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-totp',
  templateUrl: './totp.component.html',
  styleUrl: './totp.component.scss'
})
export class TotpComponent implements OnInit {
  frmOtp : FormGroup

  constructor(){
    this.frmOtp = new FormGroup({
      digit1: new FormControl('',[Validators.required]) ,
      digit2: new FormControl('',[Validators.required]) ,
      digit3: new FormControl('',[Validators.required]) ,
      digit4: new FormControl('',[Validators.required]) ,
      digit5: new FormControl('',[Validators.required]) ,
      digit6: new FormControl('',[Validators.required]) 
    })
  }

  ngOnInit(): void {
   
  }

  // Función para avanzar al siguiente campo
  onInputChange(event: any, nextInput: any): void {
    const input = event.target;

    if (input.value.length === 1 && nextInput) {
      nextInput.focus();
    }
  }

  // Función para retroceder al campo anterior si se presiona "Backspace"
  onKeyDown(event: KeyboardEvent, prevInput: any): void {
    const input = event.target as HTMLInputElement;

    if (event.key === 'Backspace' && input.value === '' && prevInput) {
      prevInput.focus();
    }
  }

  // Método para obtener el valor final del TOTP
  getTotpValue(): string {
    return Object.values(this.frmOtp.value).join('');
  }

}
