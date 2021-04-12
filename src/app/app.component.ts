import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'science-memory';

  updateChecked = false;
  updateAvailable = false;
  
  get waitingForUpdates() {
    return !this.updateChecked || this.updateAvailable;
  }

  constructor(private updates: SwUpdate) {}

  async ngOnInit() {
    this.updates.available.subscribe(() => {
      this.updateAvailable = true;
      window.location.reload();
    });
    if (this.updates.isEnabled) {
      await this.updates.checkForUpdate();
    } else {
      console.log('Service worker updates are disabled.');
    }
    this.updateChecked = true;
  }
}
