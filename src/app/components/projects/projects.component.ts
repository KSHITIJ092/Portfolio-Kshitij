import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    { title: 'StudySync', description: 'A unified educational platform for virtual classrooms and peer collaboration.' },
    { title: 'BlogMaster', description: 'An end-to-end blogging platform with interactive tools and local storage.' },
    { title: 'InfluencerHub', description: 'Social media management platform with real-time analytics and sponsorship management.' },
    { title: 'SwayamGov', description: 'E-Gov software for managing government documentation with secure data storage.' },
  ];
}
