import { SafeUrlPipe } from './safe-url.pipe';
import { inject } from '@angular/core/testing';

import { DomSanitizer} from '@angular/platform-browser';

describe('SafeUrlPipe', () => {
  it('create an instance', inject([ DomSanitizer ], (sanitzer: DomSanitizer) => {
    const pipe = new SafeUrlPipe(sanitzer);
    expect(pipe).toBeTruthy();
  }));
});
