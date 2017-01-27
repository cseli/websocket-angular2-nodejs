import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs/Rx';
import {WebSocketService} from './websocket.service';

const URL = 'ws://localhost:8080/';

@Injectable()
export class DataService {
    public messages: Subject<string>;

    constructor(wsService: WebSocketService) {
        this.messages = <Subject<string>>wsService
            .connect(URL)
            .map((response: MessageEvent): string => {
                console.log(response);
                let data = response.data;
                console.log(data);
                return data;
            });
    }
}