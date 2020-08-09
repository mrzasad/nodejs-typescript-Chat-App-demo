# Nodejs Text Message List 
## Instructions for installation
- Git clone https://github.com/mrzasad/nodejsTextMessageChat.git
- Run **npm install**.
- Start the server using command **npm start**. Default port is 3000.
- Run command **mocha test** for unit test cases.
## Avaiable APIs
- /messages (POST)
  - Body must be JSON
  - Input format is ```{
    "sentBy": "name",
    "message": "value"
}```
- /messages (GET)
  - Retrive all the message in alphabetical order
