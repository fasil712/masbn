import { Component, Input } from '@angular/core';
import { navigation } from 'src/data/navigation';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss'],
})
export class NavContentComponent {
  category: any;
  @Input() selectedSection: any;
  ngOnInit() {
    this.category = navigation;
    console.log();
    
  }
}
