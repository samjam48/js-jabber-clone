# Contributing

Thanks for your interest in contributing to the JavaScript Air website!
Join [gitter](https://gitter.im/javascriptair/site) channel for discussion.

## Setup

Note: This project requires [Node.js v6](https://nodejs.org/). And I recommend [`yarn`](https://github.com/yarnpkg/yarn),
but all of the `yarn` commands on this page should work with [`npm`](https://www.npmjs.com/) as well.

1. Fork the repo
2. Clone your fork
3. Make a branch for your feature/bugfix/new episode/etc.
4. Run `yarn install` (make sure you have node and npm installed first)
5. Run `yarn start validate` to get everything built for the first bit. (If this doesn't work, please file an issue with your node/npm versions and the error message).
6. Run `yarn start server` and open `localhost:8080` in a browser
7. If you experience any issues up to this point, please file an issue!
8. Run the dev script(s) (in separate terminal tabs/windows) relevant for the changes you're making (see below), make your changes, and refresh your browser to see them
9. Run `yarn start build` again to make sure you wont break the build
10. Commit your changes and reference the issue you're addressing (for example: `git commit -am 'Your descriptive message. Closes #34'`)
11. Push your branch to your fork
12. Create a pull request from your branch on your fork to master on this repo
13. Get merged! 🎉 🎊

### Add yourself to the contributors page

Even for minimal changes, I'd love it if you add yourself to the official
[JavaScript Air contributors page](https://javascriptair.com/contributors) for your first contribution.

Please download your photo and use `yarn start compress-image /path/to/the/image` to compress your photo (more info
below). Put the resulting image in the `data/contributors` directory. Then add an entry for yourself to
`data/contributors/index.js`. That's it! Thanks!

## npm scripts

Most of everything you do with the website you can do with the npm scripts you find in the `package.json` file.

I recommend you look at the scripts that start with `dev` which will watch the filesystem for changes and re-run the build for that page while you're developing.

If you want, you can just run `yarn start dev`. That effectively rebuilds everything anytime you change a file. This takes a second, but it works :-)

## CSS

CSS is currently being migrated to [`aphrodite`](https://npmjs.com/package/aphrodite). This means you don't need to do anything
special from a build perspective for most stuff. For some of the older stuff, here's what you've gotta do:

CSS is processed using [postcss](https://github.com/postcss/postcss) and you need to build it (it's `.gitignored`). To do this, run `yarn start build.css`.

If you're going to work on the css, you can run `yarn start dev.css` and it will watch the file for changes and rebuild.

## Episodes

I've hacked together a pretty crazy way to build these files. I'm sure
there's a much better way to do this. But what we've got works pretty
well. If you're working on a specific episode (for example, the first
episode), simply run:

```
yarn start dev:episode episodes/2015-12-09
```

This will start nodemon watching your file system for changes and
recompiling your page on changes. No hot reloading or anything. Yes, I
have no idea what I'm doing. (protip, you may also want to look into [npm-quick-run](npm.im/npm-quick-run))

I've added a [plop](http://npm.im/plop) generator for adding new
episodes. In the root directory, simply enter

```
plop episode
```

Follow the prompts and it will generate the episode file for you.

## Podbean description

You can generate the description for the podbean podcast like so:

```
yarn start description episodes/2015-12-09
```

`pbcopy` is available on OSX if you want to pipe the output to your
clipboard (recommended)

## Images

Pretty much all images should be `180x180` and compressed. We've automated this pretty well to make it simple to do.

To do this we're using [imagina](http://npm.im/imagina). Check out the `imagina` docs to see how to set it up to work on your machine.

Simply run:

```
yarn start compress-image /path/to/the/image
```

And you'll get a compressed, resized, and converted (if needed) image to use for the site. This image will have the original filename, but will end with "resized.png". Before committing, make sure to replace your original image with the compressed one by deleting the original and renaming the compressed one to the original's filename.

## Deploying

We deploy with [surge.sh](https://surge.sh) automatically with
[travis-ci](https://travis-ci.org/javascriptair/site). Once stuff gets
into master, travis builds it and deploys it to surge. That's it! It's
magic!
