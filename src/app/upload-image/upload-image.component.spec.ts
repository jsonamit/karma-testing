import { TestBed } from '@angular/core/testing';
import { UploadImageComponent } from '../upload-image/upload-image.component';
import { ImageUploadService } from '../services/image-upload.service';

describe('UploadImageComponent', () => {
  let service = new ImageUploadService();
  function setup() {
    const fixture = TestBed.createComponent(UploadImageComponent);
    const component = fixture.componentInstance;
    const userService = fixture.debugElement.injector.get(ImageUploadService);
    return { fixture, component, userService };
  }

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

  xit('should display user is NOT logged in message', () => {
    const userResponse = [
      {
        status: 'success',
        message: 'image uploaded successfully',
      },
    ];
    const { fixture, component, userService } = setup();
    spyOn(userService, 'upload').and.returnValue(undefined);
    fixture.detectChanges();

    const compile = fixture.debugElement.nativeElement;
    const loggedInUser = compile.querySelector('p');
    expect(loggedInUser.textContent).toBe(' user is NOT logged In. ');
  });

})