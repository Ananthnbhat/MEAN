import { Injectable } from '@angular/core';
import { Keg } from "./models/keg.model";
import { KEGS } from "./models/kegs";

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';



@Injectable()
export class KegsService {

  getKegs(): Observable<Keg[]> {
    return of(KEGS);
  }

  constructor() { }

}
