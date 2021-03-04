import { TestBed,ComponentFixture } from '@angular/core/testing';
import { UploadImageComponent } from '../upload-image/upload-image.component';
import { ImageUploadService } from '../services/image-upload.service';
import { By } from '@angular/platform-browser';

describe('UploadImageComponent', () => {
  let component;
  let service = new ImageUploadService();
  let fixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        
      ],
      declarations: [
        UploadImageComponent
      ],
    }).compileComponents();
  })

  beforeEach(() => {
     fixture = TestBed.createComponent(UploadImageComponent);
     component = fixture.componentInstance;
     fixture.detectChanges();
  });
 
  it('Base64 image should be upload', () => {
    const userResponse = [
      {
        status: 'success',
        message: 'image uploaded successfully',
      },
    ];
    let response;
    service.upload().subscribe(res => {
      response = res;
    });

    expect(response).toEqual(userResponse);
  })

  it('find P tag in whole page', () => {
    let element = fixture.debugElement.queryAll(By.css('p'));
    expect(element.length).toEqual(4);
  })

})