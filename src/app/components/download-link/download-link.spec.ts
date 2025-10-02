import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadLink } from './download-link';

describe('DownloadLink', () => {
  let component: DownloadLink;
  let fixture: ComponentFixture<DownloadLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadLink]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadLink);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
