import { Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from 'src/app/Services/empleado.service';
import { Empleado } from 'src/app/Models/Empleado';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-empleados-departamento',
  templateUrl: './empleados-departamento.component.html',
  styleUrls: ['./empleados-departamento.component.css']
})
export class EmpleadosDepartamentoComponent implements OnInit {

  public empleados!: Array<Empleado>;

  constructor(private _service:ServiceEmpleados,private _route:ActivatedRoute) {

  }

  ngOnInit(): void {
    this._route.params.subscribe((params:Params)=>{
      var iddepartamento = params['iddepartamento'];
      this._service.getEmpleadosDepartamento(iddepartamento).subscribe(response=>{
        this.empleados = response;
      })
    })
    
  }

}
