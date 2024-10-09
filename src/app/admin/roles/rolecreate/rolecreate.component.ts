import { FormStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { Permiso } from '../../../interfaces/permisos.interfaces';
import { Report } from 'notiflix/build/notiflix-report-aio';

@Component({
  selector: 'app-rolecreate',
  templateUrl: './rolecreate.component.html',
  styleUrl: './rolecreate.component.scss'
})
export class RolecreateComponent implements OnInit {
  frmRole: FormGroup
  permisos: Permiso[] =[]
  isSubmited : boolean = false;

  constructor(private _apiService: ApiService ){
    this.frmRole = new FormGroup({
      name: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      //isActive: new FormControl(true,[Validators.required]),
      permissionIds: new FormArray([])
    })
  }

  ngOnInit(): void {
    this._apiService.permisos().subscribe(
      {
        next:result=>{
          this.permisos = result
        },
        error: errors=>{

        }

      }
    )
    //throw new Error('Method not implemented.');
  }

  submit(){
    if(this.isSubmited) return

    this.isSubmited = true;

    if(this.frmRole.valid){

      this._apiService.createRole(this.frmRole.value)
      .subscribe({
        next: result=>{
          setTimeout(() => {
            this.isSubmited = false
            Report.success(
              "Sistema",
              "Registro guardado con exito",
              "Acptar"
            )  
          }, 200);
          
        }
      })
    }

    this.isSubmited = false
  }

  // Método que se ejecuta cuando se selecciona o deselecciona un checkbox
  onCheckboxChange(e: any) {
    const permisosArray: FormArray = this.frmRole.get('permissionIds') as FormArray;

    if (e.target.checked) {
      // Agregar permiso seleccionado
      permisosArray.push(new FormControl(e.target.value));
    } else {
      // Remover permiso deseleccionado
      const index = permisosArray.controls.findIndex(x => x.value === e.target.value);
      permisosArray.removeAt(index);
    }
  }



}
