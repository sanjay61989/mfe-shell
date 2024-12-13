import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private socket$!: WebSocketSubject<any>;

  constructor() {}

  connect(url: string): void {
    this.socket$ = webSocket(url);
  }

  sendMessage(message: any): void {
    if (this.socket$) {
      this.socket$.next(message);
    }
  }

  getMessages(): Observable<any> {
    return this.socket$;
  }

  close(): void {
    if (this.socket$) {
      this.socket$.complete();
    }
  }
}
