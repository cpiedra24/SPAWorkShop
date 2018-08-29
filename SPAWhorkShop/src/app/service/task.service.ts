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

  registrar(task: Task) {
    let headers = new Headers({ 'Content-type': 'application/json' });
    return this._http.post(this.url + 'tasks', task)
      .map(res => res);
  // }
  // TaskUpdate(task: Task) {
  //   let headers = new Headers({ 'Content-type': 'application/json' });
  //   return this._http.put(this.url + 'updateUSer/' + task._id, task, { headers })
  //     .map(res => res.json());
  // }
  // deleteTask(task: Task) {
  //   let json = JSON.stringify(task);
  //   let params = json;

  //   let headers = new Headers({ 'Content-type': 'application/json' });
  //   return this._http.delete(this.url + 'updateUSer/' + task._id, { headers })
  //     .map(res => res.json());
  // }

}}
