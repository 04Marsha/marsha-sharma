import { Component, OnInit } from '@angular/core';

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
  styleUrl: './experience.component.css',
})
export class ExperienceComponent implements OnInit {
  isLoading = true;
  experiences: Experience[] = [];
  ngOnInit() {
    setTimeout(() => {
      this.experiences = [
        {
          role: 'Emerging Technologies (AI & Cloud)',
          company: 'Edunet Foundation in Collaboration with AICTE',
          duration: 'June 05, 2025 - July 02, 2025',
          description:
            'Completed a 4-week internship leveraging IBM SkillsBuild and IBM Cloud Platform. Gained hands-on experience with Artificial Intelligence and Cloud Computing concepts, working on real-world scenarios and guided projects. Developed a strong foundation in emerging technologies through structured training, labs, and active participation in sessions.',
        },
      ];
      this.isLoading = false;
    }, 1000);
  }
}
