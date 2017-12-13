/*
import { SafeUrlPipe } from './safe-url.pipe';
import { SecurityContext } from '@angular/core';
import { inject } from '@angular/core/testing';

import { DomSanitizer } from '@angular/platform-browser';

describe('SafeUrlPipe', () => {
  it('create an instance', inject([ DomSanitizer ], (sanitizer: DomSanitizer) => {
    const pipe = new SafeUrlPipe(sanitizer);
    expect(pipe).toBeTruthy();
  }));


  it('should return the sanitized url', inject([ DomSanitizer ], (sanitizer: DomSanitizer) => {
    const pipe = new SafeUrlPipe(sanitizer);
    const url = pipe.transform('http://google.nl');

    expect(url).toBe('http://google.nl');

  }));

});
*/
