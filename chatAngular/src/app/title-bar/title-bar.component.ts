import { Component, OnInit } from '@angular/core';
import { UserNameService } from '../services/connexion.service';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {
  userNameObservable: any;
  userName: any;

  constructor(private userNameService: UserNameService) {
    this.userNameObservable = this.userNameService.execChange.subscribe((value) => {
      this.userName = value;
    });
  }

  ngOnInit() {
    this.getPseudo();
  }
  
  deconnexion(): void {
    localStorage.removeItem('pseudo');
    localStorage.removeItem('connexion');
    window.location.reload();
  }

  getPseudo(): void {
    this.userName = localStorage.getItem('pseudo');    
  }

}
