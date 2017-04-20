import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ItunesService {

  constructor(private jsonp: Jsonp) { }

 getSongs(){
 	let params= new URLSearchParams();
 	params.set("action","opensearch");
 	params.set("format","json");
 	params.set("callback", "JSONP_CALLBACK");
 	let url="http://itunes.apple.com/search?term=iron%20maiden";
 	return this.jsonp.get(url,{params:params})
			.map(res=>res.json());
 }

 getSongsB(buscar){
 	let params= new URLSearchParams();
 	params.set("action","opensearch");
 	params.set("format","json");
 	params.set("callback", "JSONP_CALLBACK");
 	let url="http://itunes.apple.com/search?explicit=y&term="+buscar;
 	return this.jsonp.get(url,{params:params})
			.map(res=>res.json());
 }

}
