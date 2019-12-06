import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from '../services/chat-service.service';
import { Message } from '../interfaces/messages';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-display-component',
  templateUrl: './display-component.component.html',
  styleUrls: ['./display-component.component.scss']
})
export class DisplayComponentComponent implements OnInit {
  isConnected: boolean = false;
  userName: string;
  content: string;
  messages: Message[] = [];
  

  constructor(private chatService: ChatServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (localStorage.getItem('connexion') === 'true') {
      this.isConnected = true
    } else {
      this.isConnected = false;
    }
  }

  connexion(): void {
    this.isConnected = true;
    this.userName === '' ? this.userName : 'Personne sans nom';
    localStorage.setItem('pseudo', this.userName);
    localStorage.setItem('connexion', JSON.stringify(this.isConnected));
  }

  deconnexion(): void {
    this.isConnected = false;
    localStorage.removeItem('pseudo');
  }

  sendMessages(): void {
    this.chatService.sendMessage({
      content: this.content,
      author: localStorage.getItem('pseudo'),
    }).subscribe(
      (message: Message) => {
        this.messages.push(message)
      })
      this.content = '';
  }


}
