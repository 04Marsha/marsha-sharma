import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimatedPageBase } from '../../shared/page.animate';

interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css', '../../shared/page.animate.css'],
})
export class ExperienceComponent extends AnimatedPageBase implements OnInit {
  experiences: Experience[] = [];

  constructor(router: Router) {
    super(router);
  }

  ngOnInit() {
    this.experiences = [
      {
        role: 'Emerging Technologies (AI & Cloud)',
        company: 'Edunet Foundation in Collaboration with AICTE',
        duration: 'June 05, 2025 - July 02, 2025',
        description:
          'Completed a 4-week internship leveraging IBM SkillsBuild and IBM Cloud Platform. Gained hands-on experience with Artificial Intelligence and Cloud Computing concepts, working on real-world scenarios and guided projects. Developed a strong foundation in emerging technologies through structured training, labs, and active participation in sessions.',
      },
    ];
  }
}
