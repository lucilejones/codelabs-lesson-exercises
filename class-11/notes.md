first download/install Angular to be able to use the CLI

In the CLI to create a new project:
ng new file-name --no-strict
(--no-strict will disable TS to make writing a first project easier)
Would you like to add Angular routing - no (for now)
Which stylesheet format would you like to use? Choose CSS
Should add all the packages and initialize git
Then cd into the file-name.
We will mostly spend time coding in one main folder (src). A lot of the starter code is configuration.
There's an index.html file - this is the main SPA HTML file.
It has an <app-root></app-root>

To preview the app in the browser:
ng serve
(similar to live server)
Will get a list of the files and their sizes. 
It will say open your browser on http://localhost:<port number>
"Compiled successfully."
In order to stop the server, Ctrl + C
ng serve --open
This will generate the project and automatically open it in the browser.

The main.ts is more of a configuration file.
We can add global styles to the styles.css file.

The environments folder is for setting up the environment we're working on - we're building and testing in the development environment; users are on the production environment. 

The assets folder is for including fonts, images, icons, logos, etc.

We'll spend most of the time in the app folder. This will have most of the folders that create the application.

The app.module.ts - lets our application be aware of what components there are. 
The app component is a special type of component - it connects the app to all the components.
A component is made up of the html file, what we see on the screen, and the TS file, the functionality that manipulates the DOM. (We can add css files and testing files - those are optional.)

The app.component.html file
-to start a new project we can delete all the starter code on the app.component.html file

Stop the server when creating a new component.
To create a new component in the CLI:
ng g c navbar
This will create a folder in the app folder called navbar.
It will list out the files that it created. 

In the app.module.ts it will add the navbar to the list of components.

Then we need to add the component to the app.component.html file.
Inside the navbar.component.ts file there's the decoration with info about the component (selecter, templateUrl, stuleUrls).
We use the selector app-navbar

In the app.component.html file we add <app-navbar></app-navbar>

ng g c shared/article
This will create a new folder (shared) in the app folder with a component article

Each time we use the <article.component.html> file, Angular is creating an instance of that component.

In the article.component.ts file there's a class ArticleComponent
we can add the property title: (and right now just hardcode the title)

String interpolation in Angular: data binding to transfer data from ts file to html template
in the article.component.html file:
<h2>{{ title }}</h2> - this info will be coming in dynamically from a database, api, etc.

Example of property binding:
in the html file: <button [disabled]="isDisabled">Like</button>
in the ts file: isDisabled: boolean = true

inside the class (in the ts file):

ngOnInit(): void {
    setTimeout( () => {
        this.isDisabled = false
    }, 2000)
}

Event binding is similar to adding event listeners to elements
example:
<button [disabled]="isDisabled" (click)="likeArticle()">Like</button>
<div>{{count}}</div>

in the ts file we can create a method called likeArticle():

outside the function (after tile, isDisabled) create a function count: number = 0;

then the function:
likeArticle() {
    this.count++;
}

under the count we can include an ngIf - it will dictate whether we see an element with a certain attricute based off a certain condition
<div *ngIf="count > 3">
    The like are greater than three.
</div>

Angular automatiically creates a git repository, so when creating a new repository on github, use the option "push an existing repository from the command line"
