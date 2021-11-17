import { Component, OnInit ,ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute , Params , Router } from '@angular/router';
import { Departamento } from 'src/app/Models/Departamento';
import { ServiceDepartamentos } from 'src/app/Services/departamento.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  @ViewChild("cajanumero") cajanumero!: ElementRef;
  @ViewChild("cajanombre") cajanombre!: ElementRef;
  @ViewChild("cajalocalidad") cajalocalidad!: ElementRef;

  public departamento!: Departamento;

  constructor(private _route:ActivatedRoute, private _router: Router, private _service: ServiceDepartamentos) { }

  ngOnInit(): void {
    this._route.params.subscribe((params:Params)=>{
      var numero = parseInt(params['numero']);
      this.departamento = new Departamento(numero, params['nombre'],params['localidad']);
    })
  }

  modificar():void{
    var num = this.cajanumero.nativeElement.value;
    var nom = this.cajanombre.nativeElement.value;
    var loc = this.cajalocalidad.nativeElement.value;

    var departamento = new Departamento(parseInt(num),nom,loc);
    this._service.updateDepartamento(departamento).subscribe(response=>{
      this._router.navigate(['/'])
    })
  }

}
