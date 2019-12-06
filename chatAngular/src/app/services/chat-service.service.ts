import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Channel } from '../interfaces/channel';
import { Message } from '../interfaces/messages';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor(private http: HttpClient) { }

  getChannels(): Observable<Channel[]> {
    return this.http.get<Channel[]>(environment.urlChannel)
  }

  changeChannel(channel: Channel): Observable<Channel> {
    return this.http.get<Channel>(`${environment.urlChannel}?channelId=${channel.id}`)
  }

  sendMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(environment.urlMessages, message)
  }
}
