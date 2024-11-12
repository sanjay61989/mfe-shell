import { loadRemoteModule } from '@angular-architects/native-federation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  remoteModule: any;
  async ngOnInit() {
    try {
      // Dynamically load EventService from the remote app (or shared if already loaded)
      const remoteModule = await loadRemoteModule(
        'gym-tracker',
        './EventService'
      );
      const eventService = remoteModule.EventService;

      // Subscribe to the shared event service
      eventService.events$.subscribe((event: CustomEvent) => {
        console.log('Received event from remote:', event.detail);
      });
    } catch (err) {
      console.error('Error loading remote module:', err);
    }
  }
}
