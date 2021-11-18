import { Injectable } from "@angular/core";
import { Global } from "../Global";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Departamento } from "../Models/Departamento";

@Injectable()
export class ServiceEmpleados{
    constructor(private _http: HttpClient){}

    getEmpleados():Observable<any>{
        var request ="api/Empleados"
        var url = Global.urlApiEmpleadosfullstack + request;
        return this._http.get(url);
    }

    getEmpleadosDepartamento(iddepartamento: string):Observable<any>{
        var request = "api/empleados/empleadosdepartamento/" + iddepartamento;
        var url = Global.urlApiEmpleadosfullstack + request;
        return this._http.get(url);
    }
    getDetallesEmpleado(idempleado:string):Observable<any>{
        var request = "api/empleados/" + idempleado;
        var url = Global.urlApiEmpleadosAction + request;
        return this._http.get(url);
    }
    incrementarSalarioEmpleado(idEmpleado:number, incremento:string):Observable<any>{
        var request = "/api/Empleados/IncrementarSalario/" + idEmpleado + "/" + incremento;
        var url = Global.urlApiEmpleadosAction + request;
        var header = new HttpHeaders().set("Content-Type","application/json")
        return this._http.put(url,{headers:header});
    }
}