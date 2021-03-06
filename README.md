# Flickr Photo Stream

Flickr Photo Stream is a web app that consumes the Flickr API to display and search for photos created by different authors.

## Dependencies & DevDependencies

- antd
- axios
- cors
- history
- html-react-parser
- node-sass
- react
- react-dom
- react-lazy-load
- react-masonry-css
- react-redux
- react-router-dom
- react-scripts
- redux
- redux-thunk
- redux-immutable-state-invariant

## Installation

Flickr Photo Stream requires [Node.js](https://nodejs.org/) v12.14.0+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ git clone git@bitbucket.org:iamjonathan/holiday-extras-flickr.git
$ cd holiday-extras-flickr
$ npm install
```

## Development

Flickr Photo Stream uses create-react-app for fast developing.
Make a change in your file and instantaneously see your updates!

### Starting the development server:

The development server is set to run on http://localhost:3000/. If this port is being used, create-react-app will ask to use a different port.

```sh
$ npm start
```

#### Building for source

For production release:

```sh
$ npm run build
```

Test with a static server:

```sh
$ yarn global add serve
$ serve -s build
```

## License

MIT
