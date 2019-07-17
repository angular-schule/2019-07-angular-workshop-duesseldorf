import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() number = 1;

  titles = [
    'Seamlessly visualize quality',
    'Completely Synergize',
    'Dynamically Procrastinate',
    'Best in class',
    'Dynamically innovate supply chains',
    'Sanity check',
    'Dogs and foxes'
  ];

  texts = [
    'Collaboratively administrate empowered markets via plug-and-play networks.',
    'Dramatically engage seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.',
    'Completely synergize resource taxing relationships via premier niche markets.',
    'Imagine jumping into that boat, and just letting it sail wherever the wind takes you.',
    'Holisticly predominate extensible testing procedures for reliable supply chains.',
    'Objectively innovate empowered manufactured products whereas parallel platforms.',
    'The quick brown fox jumps over the lazy dog.'
  ];

  get title() {
    return this.titles[this.number-1];
  }

  get text() {
    return this.texts[this.number-1];
  }

}
