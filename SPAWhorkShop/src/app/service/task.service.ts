import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { GLOBAL } from './GLOBAL';
import { Task } from '../models/taskModel';
import 'rxjs/add/operator/map';
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';


@Injectable()
export class TaskService {
  public url: string;

  constructor(private http: Http,  private _http: HttpClient) {
    this.url = GLOBAL.url;
  }
//MEtodo para registrar las tareas, se mandan las tareas por parametros
  registrar(task: Task) {
    let headers = new Headers({ 'Content-type': 'application/json' });
    return this._http.post(this.url + 'tasks', task)
      .map(res => res);


}}
