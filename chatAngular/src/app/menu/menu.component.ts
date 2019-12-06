import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from '../services/chat-service.service';
import { Channel } from '../interfaces/channel';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  channels: Channel[] = [];

  constructor(private chatService: ChatServiceService) { }

  ngOnInit() {
    this.chatService.getChannels().subscribe(
      (channels: Channel[]) => this.channels = channels
    )   
  }


  changeChannel(chan: Channel): void {
    this.chatService.changeChannel(chan).subscribe();
  }
}
