import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto } from '../../models/contacto'
import { Login } from '../../models/login';

@Injectable({
  providedIn: 'root'
})
export class Contacto1Service {

    url_api = 'https://ancient-caverns-96638.herokuapp.com';

    constructor( private http: HttpClient ) { }

    getContactos(): Observable<any>{
        return this.http.get(`${this.url_api}/api/obtener-lista-contactos`)
    }

    getContacto(id:String): Observable<any>{
        return this.http.get(`${this.url_api}/api/obtener-contacto/${id}`)
    }

    postContacto(contactoFormulario: Contacto):Observable<any>{
        return this.http.post(`${this.url_api}/api/crear-contacto`, contactoFormulario)
    }
    postLogin(loginFormulario: Login):Observable<any>{
        return this.http.post(`${this.url_api}/api/login`, loginFormulario)
    }
    putUser(tareas:any,id:String):Observable<any>{
        return this.http.put(`${this.url_api}/api/actualizar-contacto/${id}`, tareas)
    }
    deleteContacto(id:String):Observable<any>{
        return this.http.delete(`${this.url_api}/api/borrar-contacto/${id}`)
    }

}
