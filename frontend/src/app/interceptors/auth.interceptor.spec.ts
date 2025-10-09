import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';

import { AuthInterceptor } from './auth.interceptor';
import { AuthService } from '../auth/auth.service';

describe('authInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => {
      const authService = TestBed.inject(AuthService);
      // Wrap next (HttpHandlerFn) in an object implementing HttpHandler
      const handler = { handle: next };
      return new AuthInterceptor(authService).intercept(req, handler);
    });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
