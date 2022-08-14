import {Injectable} from '@angular/core';
import {of} from "rxjs";
import {WORKS} from "./mock-works";

@Injectable({
  providedIn: 'root'
})
export class WorksService {
  getWorks() {
    return of(WORKS);
  }
}
