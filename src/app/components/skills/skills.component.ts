import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    'HTML', 'JavaScript', 'CSS', 'Python', 'C Programming', 'Java', 'MySQL',
    'ReactJS', 'Angular', 'Node.js', 'Bootstrap', 'TypeScript', 'Data Structures'
  ];
}
