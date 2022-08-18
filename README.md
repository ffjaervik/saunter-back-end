![Logo]


## Authors

- Fabian Deckmann - [@ffjaervik](https://github.com/ffjaervik) 
- Sam Safari - [@99daycoder](https://github.com/99daycoder/)
- Jaden Joel - [@jadenjoel](https://github.com/jadenjoel) 
- Kieran Gill - [@KieranWebDev](https://github.com/KieranWebDev)

## Installation Backend 
Install studyBudz backend (server side) via github clone

```bash
  git clone https://github.com/SchoolOfCode/w9_backend-project-room-5-front-end
  cd studyBudz
  npm install

```


## API Reference
## Server live API URL: https://studybudzapp.herokuapp.com/
#### Get all items
```http
  GET /lessons
```
#### Get lessons by their id (lesson_id)
```http
  GET /lessons/id
```
#### Search for a specific topic, the query find topics that include the keyqord ANYWHERE in the topic
```http
GET /lessons/q?topic=
```
Example: /lessons/q?topic=html
#### POST availability to give lessons
```http
POST /lessons
```
Create a new DB entry. The lesson _id is generated automatically
Example: {
            "name": "Laura Jones",
            "topic": "All you need to know about js",
            "description": "Just 30 minutes and you will be a pro!",
            "zoom": "http://zoom.com",
            "paypalemail": "test2@example.com",
            "datetime": "2022-06-23 18:15:00",
            "duration": 30,
            "starrating": 5
        }
#### DELETE lessons
```http
DELETE /lessons
```
Example:
http://localhost:4000/lessons/9
Description:
Delete a row on SQL db by it’s lesson_id
#### DELETE lessons by topic
```http
DELETE /lessons
```
Example:
/lessons?topic=html
## Deployment

To deploy this project signup for a Heroku free account
Create a Heroku App
Link your Github to Heroku
Make sure you enable automatic deployment

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`

