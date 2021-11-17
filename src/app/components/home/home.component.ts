import { Component, OnInit } from '@angular/core';
import { ServiceDepartamentos } from 'src/app/Services/departamento.service';
import { Departamento } from 'src/app/Models/Departamento';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public departamentos!: Array<Departamento>;

  constructor(private _service:ServiceDepartamentos) { }

  ngOnInit(): void {
    this.cargaDatos();
  }

  eliminar(id:number):void{
    this._service.deleteDepartamento(id).subscribe(response=>{
      this.cargaDatos();
    });
    
  }
  cargaDatos():void{
    this._service.getDepartamentos().subscribe(response =>{
      this.departamentos = response;
    });
  }
}
