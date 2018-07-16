import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'asdfa';
	tasks = [];
	task: object;
	constructor( private _httpService: HttpService) {
	}

	ngOnInit(){
	}

	getTaskFromService(): void{
		var observable0 = this._httpService.getTask();
		observable0.subscribe( data => {
			console.log("Got our tasks!", data)
			this.tasks = data['task'];
			console.log(this.tasks)
		})
	}
	getShowFromService(id: string): void{
		var observable1 = this._httpService.getShow(id);
		observable1.subscribe( data => {
			var task = data;
			console.log(data)
			this.task = data;
		})
	}
}
