import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Posts} from '../classes/post'
@Injectable()
export class ApiService{
    
    constructor(private httpclient: HttpClient){}
    getproduct(): Observable<any>{
        return this.httpclient.get("https://jsonplaceholder.typicode.com/posts/1/comments")
    }

    getbyParameter(): Observable<any>{
        let param1 = new HttpParams().set('userId', "1");
        return this.httpclient.get("https://jsonplaceholder.typicode.com/posts/",{params:param1})
    }

    post(opost: Posts): Observable<any>{
        return this.httpclient.post("https://jsonplaceholder.typicode.com/posts/",opost);
    }


}