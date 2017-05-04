import {Component} from 'angular2/core';
import {SearchService} from './services/Search';
import {HTTP_BINDINGS} from 'angular2/http'
import 'rxjs/Rx';   
 
@Component({
	selector: 'app-root',
	templateUrl: 'app/app.component.html'
})

export class AppComponent {
	searchField:Control;
	coolForm:ControlGroup; 
	
	constructor(private searchService:SearchService) {
		var obsSearch1 = this.searchService.search("rock");
		this.search1 = obsSearch1; 
		
		obsSearch1.subscribe(model => console.log(model));
		
		var obsSearch2 = obsSearch1.map(list => list);
		obsSearch2.subscribe(model => console.log(model));
		 
	}
	
}