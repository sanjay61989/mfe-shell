import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WebsocketService } from '../../wstest/websocket.service';

@Component({
  selector: 'app-cricket-score',
  templateUrl: './cricket-score.component.html',
  styleUrls: ['./cricket-score.component.css'],
})
export class CricketScoreComponent implements OnInit, OnDestroy {
  scores: any[] = [];
  private scoreSubscription: Subscription = new Subscription();

  constructor(private websocketService: WebsocketService) {}

  ngOnInit(): void {
    const websocketUrl = 'ws://localhost:8080';
    // const websocketUrl = 'ws://your-server-url'; // Replace with actual WebSocket server URL
    this.websocketService.connect(websocketUrl);

    this.scoreSubscription = this.websocketService.getMessages().subscribe({
      next: (scoreUpdate) => {
        console.log(scoreUpdate);
        this.scores.push(scoreUpdate);
      },
      error: (err) => console.error('WebSocket error:', err),
    });
  }

  ngOnDestroy(): void {
    if (this.scoreSubscription) {
      this.scoreSubscription.unsubscribe();
    }
    this.websocketService.close();
  }
}
