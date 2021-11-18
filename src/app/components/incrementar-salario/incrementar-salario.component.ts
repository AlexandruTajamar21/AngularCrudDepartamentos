import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params , Router } from '@angular/router';
import { ServiceEmpleados } from 'src/app/Services/empleado.service';
import { Empleado } from 'src/app/Models/Empleado';

@Component({
  selector: 'app-incrementar-salario',
  templateUrl: './incrementar-salario.component.html',
  styleUrls: ['./incrementar-salario.component.css']
})
export class IncrementarSalarioComponent implements OnInit {

  @ViewChild("cajaincremento") cajaincremento!: ElementRef;

  public empleado!: Empleado;

  constructor(private _service:ServiceEmpleados, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargaEmpleado();
  }

  incrementarSalario():void{
    var incremento = this.cajaincremento.nativeElement.value;
    this._service.incrementarSalarioEmpleado(this.empleado.idEmpleado,incremento).subscribe(response=>{
      this.cargaEmpleado();
    })
  }

  cargaEmpleado():void{
    this._route.params.subscribe((params)=>{
      var idempleado = params['idempleado'];
      this._service.getDetallesEmpleado(idempleado).subscribe(response =>{
        this.empleado = response;
      })
    })
  }

}
