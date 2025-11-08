import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resume',
  imports: [CommonModule, FormsModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  // TODO: 개인 정보 데이터
  protected readonly personalInfo = signal({
    name: '',
    nameInChinese: '',
    nameInEnglish: '',
    age: null as number | null,
    birthDay: '',
    email: '',
    mobile: '',
    address: '',
    married: '',
    family: '',
    bloodType: '',
    religion: ''
  });

  // TODO: 학력 정보 데이터
  protected readonly education = signal<Array<{
    level: string;
    schoolName: string;
    major: string;
    startDate: string;
    endDate: string;
    status: string;
    isFinal: boolean;
  }>>([
    {
      level: '',
      schoolName: '',
      major: '',
      startDate: '',
      endDate: '',
      status: '',
      isFinal: false
    }
  ]);

  // TODO: 직장 이력 데이터
  protected readonly workHistory = signal<Array<{
    period: string;
    company: string;
    partAndTeam: string;
  }>>([
    {
      period: '',
      company: '',
      partAndTeam: ''
    }
  ]);

  // TODO: 오픈소스 프로젝트 데이터
  protected readonly openSourceProjects = signal<Array<{
    name: string;
    description: string;
    features: string[];
    technologies: string[];
    developmentPeriod: string;
    officialSite: string;
    repository: string;
  }>>([
    {
      name: '',
      description: '',
      features: [],
      technologies: [],
      developmentPeriod: '',
      officialSite: '',
      repository: ''
    }
  ]);

  // TODO: 참여 프로젝트 데이터
  protected readonly participatedProjects = signal<Array<{
    company: string;
    projectName: string;
    description: string;
    role: string[];
    technologies: string[];
    period: string;
    officialSite: string;
    repository: string;
  }>>([
    {
      company: '',
      projectName: '',
      description: '',
      role: [],
      technologies: [],
      period: '',
      officialSite: '',
      repository: ''
    }
  ]);

  // TODO: 대외 활동 데이터
  protected readonly activities = signal({
    communities: [] as Array<{ date: string; title: string; reference: string }>,
    seminars: [] as Array<{ event: string; subject: string; scale: string; reference: string }>,
    conferences: [] as Array<{ event: string; title: string; scale: string; reference: string }>
  });

  // TODO: 소셜 링크 데이터
  protected readonly social = signal({
    github: '',
    twitter: '',
    facebook: ''
  });

  // TODO: 서명 정보
  protected readonly signature = signal({
    date: '',
    name: ''
  });

  // 항목 추가 메서드들
  protected addEducation(): void {
    this.education.update(list => [
      ...list,
      {
        level: '',
        schoolName: '',
        major: '',
        startDate: '',
        endDate: '',
        status: '',
        isFinal: false
      }
    ]);
  }

  protected addWorkHistory(): void {
    this.workHistory.update(list => [
      ...list,
      {
        period: '',
        company: '',
        partAndTeam: ''
      }
    ]);
  }

  protected addOpenSourceProject(): void {
    this.openSourceProjects.update(list => [
      ...list,
      {
        name: '',
        description: '',
        features: [],
        technologies: [],
        developmentPeriod: '',
        officialSite: '',
        repository: ''
      }
    ]);
  }

  protected addParticipatedProject(): void {
    this.participatedProjects.update(list => [
      ...list,
      {
        company: '',
        projectName: '',
        description: '',
        role: [],
        technologies: [],
        period: '',
        officialSite: '',
        repository: ''
      }
    ]);
  }

  protected addCommunity(): void {
    this.activities.update(activities => ({
      ...activities,
      communities: [...activities.communities, { date: '', title: '', reference: '' }]
    }));
  }

  protected addSeminar(): void {
    this.activities.update(activities => ({
      ...activities,
      seminars: [...activities.seminars, { event: '', subject: '', scale: '', reference: '' }]
    }));
  }

  protected addConference(): void {
    this.activities.update(activities => ({
      ...activities,
      conferences: [...activities.conferences, { event: '', title: '', scale: '', reference: '' }]
    }));
  }
}
