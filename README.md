# gameZone

 ## Project Structure
gameZone/
├── src/
│   ├── app/
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   ├── login.component.ts
│   │   │   │   └── login.component.html
│   │   │   ├── signup/
│   │   │   │   ├── signup.component.ts
│   │   │   │   └── signup.component.html
│   │   ├── dashboard/
│   │   │   ├── game-list/
│   │   │   │   ├── game-list.component.ts
│   │   │   │   └── game-list.component.html
│   │   │   └── dashboard.component.ts
│   │   │   └── dashboard.component.html
│   │   ├── layouts/
│   │   │   ├── admin-layout/
│   │   │   │   ├── admin-layout.component.ts
│   │   │   │   └── admin-layout.component.html
│   │   │   ├── auth-layout/
│   │   │   │   ├── auth-layout.component.ts
│   │   │   │   └── auth-layout.component.html
│   │   ├── public/
│   │   │   ├── home/
│   │   │   │   ├── home.component.ts
│   │   │   │   └── home.component.html
│   │   ├── services/
│   │   │   ├── auth-guard.service.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── games.service.ts
│   │   │   └── http-interceptor.service.ts
│   │   ├── store/
│   │   │   └── auth/
│   │   │       ├── auth.actions.ts
│   │   │       ├── auth.effects.ts
│   │   │       └── auth.reducer.ts
│   │   ├── app.module.ts
│   │   └── app-routing.module.ts
│   ├── assets/
│   ├── environments/
│   └── index.html
└── package.json

# Components and Their Functionality
## 1. Login Component
Path: src/app/auth/login/
Files:
login.component.ts: Contains the logic for user login. It dispatches a login action to the store when the form is submitted.
login.component.html: Contains the HTML template for the login form, including input fields for email and password.
Functionality:

Users can enter their email and password to log in.
On submission, the credentials are sent to the authentication service, and the authentication state is managed using NgRx.
## 2. Dashboard Component
Path: src/app/dashboard/game-dashboard/
Files:
game-dashboard.component.ts: Represents the main dashboard where users can access game-related features.
game-dashboard.component.html: Displays the content of the dashboard, including any relevant images or game information.
Functionality:The dashboard is accessible only to authenticated users (protected by AuthGuard).
It displays game-related content and may include features like viewing game details.

## 3. Home Component
Path: src/app/public/home/
Files:
home.component.ts: Contains the logic for the home page.
home.component.html: Displays the home page content, including optimized images.
Functionality:Displays the home page with images that are lazily loaded to improve performance.
# Services
Details:Created services to handle user authentication and game data retrieval.
Auth Service: Manages user login/logout.
Games Service: Fetches and manages game data.
Files
## 1. Auth Service
Path: src/app/services/auth.service.ts
Functionality:
Provides methods to handle user authentication:
login(credentials): Sends user credentials to the API for authentication.
logout(): Removes the authentication token from local storage.
isLoggedIn(): Checks if the user is logged in based on the presence of the token.
getToken(): Retrieves the authentication token from local storage.
## 2. Games Service:
Path: src/app/services/games.service.ts
## 3. Auth Guard Service
Path: src/app/services/auth-guard.service.ts
Functionality:
Implements CanActivate to protect routes.
Redirects users to the login page if they are not authenticated.
## 4. Auth Interceptor
Path: src/app/services/http-interceptor.service.ts
Functionality:
Intercepts HTTP requests to attach the JWT token in the Authorization header if it exists.
Ensures all authenticated requests carry the necessary token.
# NgRx Store
## 1. Auth Actions
Path: src/app/store/auth/auth.actions.ts
Functionality:
Defines actions for authentication, including:
login: Initiates the login process.
loginSuccess: Indicates successful login and updates the user state.
logout: Logs the user out and clears the user state.
## 2. Auth Reducer
Path: src/app/store/auth/auth.reducer.ts
Functionality:
Defines the state structure for authentication and handles state changes based on actions.
Updates the user state upon successful login or logout.
## 3. Auth Effects
Path: src/app/store/auth/auth.effects.ts
Functionality:
Listens for login actions and invokes the authentication service to log in the user.
Dispatches actions based on the result of the authentication attempt.
# App Module
Path: src/app/app.module.ts
Functionality:
Imports necessary Angular modules (e.g., HttpClientModule, FormsModule, RouterModule).
Sets up the NgRx store, effects, and the AuthGuard.
Registers the AuthInterceptor to handle token attachment to requests.
# App Routing
Path: src/app/app-routing.module.ts
Functionality:
Defines application routes:
/login: Accessible to all users.
/dashboard: Protected route, accessible only to authenticated users.


# Image Optimization
Task: Optimize image handling in the project.
Details:Implemented lazy loading for images in the Home component using the loading="lazy" attribute.
Used Angular Image Directives for additional image optimization.
## File
*Home Component*:
Path: src/app/public/home/home.component.html

# Unit Testing
Task: Write unit tests for services, guards, and NgRx.
AuthGuard logic: Ensures users are redirected if not authenticated.
HTTP Interceptor: Tests the attachment of the JWT token to requests.
Auth and Games services: Validates CRUD operations.
NgRx actions and reducers: Ensures they function as expected.

