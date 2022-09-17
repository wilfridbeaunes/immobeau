# Projet-PR71-Angular

  Site web de gestion de location et publication d'annonces

**Frontend** : Angular 

**Backend (api)**: laravel 

**Database** : Firebase

## Requirements 
  run this commandes : 
	npm install

        this run/add 
        
            ng add @angular/material 
            npm install -save bootstrap
            npm install @angular/material @angular/cdk @angular/animations --save
            ng add @asymmetrik/ngx-leaflet
  
## Initialization of the database 
  on the laravel api, run :
	
    php artisan migrate      -----> create all the tables in the database
		
    php artisan db:seed      -----> to load the informations

