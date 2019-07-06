const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.listen(3000, () => {
  console.log("hello from the new web server");
});

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.get("/albums", (req, res) => {
  res.send(albumsData);
});

// GET /albums/10
app.get("/albums/:id", (req, res) => {
  console.log(req.params);
  var id = req.params.id;

  const filteredData = albumsData.find(data => {
    return data.albumId === id;
  });
  res.send(filteredData);
});
app.post("/albums", (req, res) => {
  albumsData.push(req.body);
  console.log(req.body);
  res.send("this is the post endpoint");
});

const albumsData = [
  {
    albumId: "10",
    artistName: "Beyoncé",
    collectionName: "Lemonade",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
    releaseDate: "2016-04-25T07:00:00Z",
    primaryGenreName: "Pop",
    url:
      "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0"
  },
  {
    albumId: "11",
    artistName: "Beyoncé",
    collectionName: "Dangerously In Love",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
    releaseDate: "2003-06-24T07:00:00Z",
    primaryGenreName: "Pop",
    url:
      "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0"
  }
];
