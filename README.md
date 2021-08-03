# bigfive-simple-test

Take a big five test on your local machine and save the result.

# Setup

- download or clone the repo
- install dependencies `npm i`
- start the server `npm run dev`
- go to [http://localhost:3000](http://localhost:3000)
- take the test
- all tests will be saved to disk in the `/results` folder

## Advanced

- To change the test language change [config.js](config.js) to anything supported by b5-johnson-120-ipip-neo-pi-r

The saved tests are the raw answer data.
If you want to render the test result later you'll need to run the data through `bigfive-calculate-score` and `b5-result-text`

## Related

- [b5-johnson-120-ipip-neo-pi-r](https://github.com/Alheimsins/b5-johnson-120-ipip-neo-pi-r) Module for returning Big Five Johnson 120 IPIP-NEO-PI-R items
- [bigfive-calculate-score](https://github.com/Alheimsins/bigfive-calculate-score) Calculate score for big five tests
- [b5-result-text](https://github.com/Alheimsins/b5-result-text) Text for big five results score generated by bigfive-calculate-score

# License

[MIT](LICENSE)

## About

Created with ❤ for [Alheimsins](https://alheimsins.net)

<img src="https://image.ibb.co/dPH08G/logo_black.png" alt="Alheimsins logo" height="150px" width="150px" />