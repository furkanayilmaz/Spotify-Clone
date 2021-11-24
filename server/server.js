const express = require("express")
const SpotifyWebApi = require("spotify-web-api-node")
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();
app.use(cors())
app.use(bodyParser.json())

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken;
    // console.log("Token Refreshed")
    const spotifyApi = new SpotifyWebApi({
        redirectUri: "http://localhost:3000",
        clientId: "83a8e9308c2847e48066ac7d304b2751",
        clientSecret: "59d34154077e42a6b6d36f1d6fff5892",
        refreshToken,
    })

    spotifyApi.refreshAccessToken().then(
        (data) => {
            res.json({
                accessToken: data.body.access_token,
                expiresIn: data.body.expires_in,
            })
        }).catch(() => {
            res.sendStatus(400)
        })
})

app.post("/login", (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: "http://localhost:3000",
        clientId: "83a8e9308c2847e48066ac7d304b2751",
        clientSecret: "59d34154077e42a6b6d36f1d6fff5892",
    })

    spotifyApi
        .authorizationCodeGrant(code)
        .then(data => {
            res.json({
                accessToken: data.body.access_token,
                refreshToken: data.body.refresh_token,
                expiresIn: data.body.expires_in,
            })
        })
        .catch(err => {
            res.sendStatus(400)
        })
})

app.listen(3001)