import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceDepartamentos } from 'src/app/Services/departamento.service';
import { Departamento } from 'src/app/Models/Departamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
})
export class InsertarComponent implements OnInit {

  @ViewChild("cajanumero") cajanumero!: ElementRef;
  @ViewChild("cajanombre") cajanombre!: ElementRef;
  @ViewChild("cajalocalidad") cajalocalidad!: ElementRef;

  constructor(private _router: Router,
    private _service: ServiceDepartamentos,) {
  }

  ngOnInit(): void {
  }

  insertarDepartamento():void{

    var num = this.cajanumero.nativeElement.value;
    var nom = this.cajanombre.nativeElement.value;
    var loc = this.cajalocalidad.nativeElement.value;

    var departamento = new Departamento(parseInt(num),nom,loc);
    this._service.insertarDepartamento(departamento).subscribe(response =>{
      this._router.navigate(["/"])
    })
  }

}
