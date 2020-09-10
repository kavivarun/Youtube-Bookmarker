# Youtube-Bookmark
A MERN-Stack application that uses the youtube-API to add bookmarks of youtube videos with their statistics when you enter the video link

### Important

Create a javascript file named keys.js in the main folder and add the following to it:
```
module.exports= {
    mongoURI ://your mongodb key
    ,youtubeAPIKEY ://your youtube api key 
}  
```
### Installing

To install the dependencies run

```
# Install Server dependencies
npm install

# Install Client dependencies
npm install --prefix client
```

### Running the server

To start the server in development mode run

```
# Run both Server and Client
npm run dev

# Run Client (Port: 3000)
npm run client

# Run Server (Port: 5000)
npm run server
```
