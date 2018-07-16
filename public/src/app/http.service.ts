import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

	constructor( private _http: HttpClient ) {
	}
	getTask(){
		
		// const observable = this._http.get('/task');
		// observable.subscribe(data => {
		// 	console.log("Got our tasks!", data)
		// });
		return this._http.get('/task');
	}
	getShow(id){
		
		// const observable = this._http.get('/task/' + id);
		// observable.subscribe(data => {
		// 	console.log("Tasks with id!", data)
		// });
		return this._http.get('/task/'+ id);
	}
	getDelete(id = "5b4793f023d58a12a8f69546"){
		
		const observable = this._http.delete('/task/' + id);
		observable.subscribe(data => {
			console.log("DELETE THIS TASK!", data)
		});
	}
}