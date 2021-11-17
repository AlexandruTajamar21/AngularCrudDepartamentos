import { Injectable } from "@angular/core";
import { Global } from "../Global";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Departamento } from "../Models/Departamento";

@Injectable()
export class ServiceDepartamentos{

    constructor(private _http:HttpClient){

    }

    getDepartamentos(): Observable<any>{
        var request = "api/departamentos";
        var url = Global.urlCrudDepartamentos + request;
        return this._http.get(url);
    }
    insertarDepartamento(departamento:Departamento):Observable<any>{
        var request = "api/departamentos";
        var url = Global.urlCrudDepartamentos + request;
        var json = JSON.stringify(departamento);

        var header = new HttpHeaders().set("Content-Type", "application/json")
        return this._http.post(url,json,{headers:header});
    }

    updateDepartamento(departamento:Departamento):Observable<any>{
        var json = JSON.stringify(departamento);
        var header = new HttpHeaders().set("Content-Type","application/json");
        var request = "api/departamentos";
        var url = Global.urlCrudDepartamentos + request;

        console.log(json)
        console.log(url)
        return this._http.put(url,json,{headers:header});
    }

    deleteDepartamento(id:number): Observable<any>{
        var request = "api/Departamentos/" + id;
        var url = Global.urlCrudDepartamentos + request;
        console.log(url)
        return this._http.delete(url);
    }

}