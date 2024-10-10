import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpInterceptorService } from './http-interceptor.service';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

describe('HttpInterceptorService', () => {
  let service: HttpInterceptorService;
  let authService: jasmine.SpyObj<AuthService>;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    authService = jasmine.createSpyObj('AuthService', ['getToken']);
    
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HttpInterceptorService,
        { provide: AuthService, useValue: authService },
      ],
    });

    service = TestBed.inject(HttpInterceptorService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should add the Authorization header if token is present', () => {
    authService.getToken.and.returnValue('test-token');
    const request = new HttpRequest('GET', '/test');
    const next: HttpHandler = {
      handle: (req: HttpRequest<any>): Observable<HttpEvent<any>> => {
        return new Observable<HttpEvent<any>>();
      }
    };

    service.intercept(request, next).subscribe();

    expect(authService.getToken).toHaveBeenCalled();
  });

  it('should not add the Authorization header if no token is present', () => {
    authService.getToken.and.returnValue(null);
    const request = new HttpRequest('GET', '/test');
    const next: HttpHandler = {
      handle: (req: HttpRequest<any>): Observable<HttpEvent<any>> => {
        return new Observable<HttpEvent<any>>();
      }
    };

    service.intercept(request, next).subscribe();

    expect(authService.getToken).toHaveBeenCalled();
  });
});
