# In a Park. On a Beach
We just want to create a free minimal optimized SEO friendly blog with the help of `Firebase` and `Vercel` . Check out the result here https://inaparkonabeach.com/

## Pages
We want very minimal set of pages as follows:
1. Home page /
1. Login page /login
1. Logout page /logout
1. Create page /create
1. Edit page /edit/{slug}
1. Article page /{slug}

## Setup
### Firebase Project setup
1. Create a Firebase project
1. Create a Firestore database and set this rule to protect unauthorized publishing of articles:
    ```
    rules_version = '2';
    service cloud.firestore {
        match /databases/{database}/documents {
            match /{document=**} {
            allow read: if true;
            allow write: if request.auth != null;
            }
        }
    }

    ```
1. Create a Firestore storage to store images
1. Enable email authentication
1. Add a user with email and password so that no one else can write article but you
1. Create a web app
### Vercel Project setup
1. Fork this project
1. Host it on Vercel
1. Copy Firebase creds of created web app and add them to environment variables on Vercel like below:
    ```
    PUBLIC_apiKey=
    PUBLIC_authDomain=
    PUBLIC_projectId=
    PUBLIC_storageBucket=
    PUBLIC_messagingSenderId=
    PUBLIC_appId=
    PUBLIC_measurementId=
    ``` 
1. Redeploy the project again

## Create content
### Update Title and Tab Title
Click on pencil icon in header after log in from `/login`
### Create content
1. After login, click "Create an article" on home page to go to `/create`
2. `Save` article. After saving it will redirect to `/edit/{new-slug}` 
### Edit and Delete content
1. Log in. Visit an article. Click `Edit` or `Delete`
### Create Privacy, Terms, About and Author page
- Create articles with title `Privacy`, `Terms`, `About` and `Author`. Links will also be shown in Footer. 
- About page's content's first four lines will be shown on Home page at top. Clicking on it will redirect to About page. 
- About page's first image will be shown next to header title.
- Author description will be show on right hand side on home page with first image

### Known issues
1. Favicon is not available
1. No draft stage
1. Not using Caching
1. Some design issues
1. No confirmation for saving/updating an article and no loading state
1. 404 page doesn't exist