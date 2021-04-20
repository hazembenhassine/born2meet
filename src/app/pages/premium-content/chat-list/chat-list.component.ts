import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {

  isRelationExpanded: boolean;
  isRelationDisplayed: boolean;
  isChatExpanded: boolean;
  isChatDisplayed: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  toggleChat(): void {
    this.isChatDisplayed = true;
    this.isRelationDisplayed = false;
  }

  toggleRelation(): void {
    this.isChatDisplayed = false;
    this.isRelationDisplayed = true;
  }

}
