import { Injectable } from '@angular/core';
import { HttpModule,Http,Response } from '@angular/http';
import 'rxjs';
@Injectable()
export class DataService {
       
constructor(private http:Http){

}
    getQuizData() {
        var data:any
        return this.http.get('http://54.169.217.88/questions/fetch/?unique_key=1')
        .map((response:Response)=>{
            //console.log(response)
                let data= response.json();
                //console.log(data)
                return data ;

        })
    }

}