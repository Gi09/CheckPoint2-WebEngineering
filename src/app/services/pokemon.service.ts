import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class PokemonService{
    private url = 'https://demo1290477.mockable.io/pockemon'

    constructor(private http:HttpClient){

    }
    get_Pokemon():Observable<any>{
        return this.http.get<any>(this.url);
    }
}