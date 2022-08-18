![Logo] 

  
  

## Authors

  

- Fabian Deckmann - [@ffjaervik](https://github.com/ffjaervik)

- Sam Safari - [@99daycoder](https://github.com/99daycoder/)

- Jaden Joel - [@jadenjoel](https://github.com/jadenjoel)

- Kieran Gill - [@KieranWebDev](https://github.com/KieranWebDev)

  


## Back-End

The back-end is deployed on Heroku, however if you would like to run locally you will need to follow the steps below:

- Git clone the back-end repository by pasting the following into your terminal:

```bash
  git clone https://github.com/SchoolOfCode/final-project_back-end-team-saunter.git
```

- Install all required dependencies by running:

```bash
  npm i
```

- To run the server locally use the following script within your terminal:

```bash
  npm run dev
```

## Running Tests
To run front-end testing, ensure you have installed dependencies using npm i (see above) and then run the following:

```bash
  npm run test
```



  
  

## API Reference

## Server live API URL: https://saunter-db.herokuapp.com/


#### Get all activities

```http

GET /all-budgets

```

#### Patch activities by id

```http

PATCH /all-budgets
[Id is sent with request body]

```

#### Get day plans

```http

GET /dayplans

```

#### Post day plans

```http

POST /dayplans

```
#### Get saved activities 

```http

GET /saved

```


Create a new DB entry. The id is generated automatically.
This will add a day plan to the dayplans table on the db.
* The name property is the user generated name of the day plan.
* The activities property is the collection of activities id's from the activities table

Example: {

"name": "Weekend Bonanza",

"activities": "2, 5, 6, 15",

}


## Deployment

To deploy this project signup for a Heroku free account

Create a Heroku App

Fork the repository

Link the Github repository to Heroku.

## Scripts
Make sure  development environment is running:
```http
npm run dev
```

#### Create activities table
```http
node -r dotenv/config ./db/scripts/createTable.js
```
#### Populate activities table
```http
node -r dotenv/config ./db/scripts/populateTable.js
```
#### Drop activities table
```http
node -r dotenv/config ./db/scripts/dropTable.js
```
#### Create dayplans table
```http
node -r dotenv/config ./db/scripts/createDayplansTable.js
```
#### Drop dayplans table
```http
node -r dotenv/config ./db/scripts/dropDayplansTable.js
```




