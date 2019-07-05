# libpack-scripts

libpack-script used for build multiple packages

## Installer

`npm i -D libpack-scripts`

or

`yarn add libpack-scripts --dev`

## Usage

setting `package.js` file

```
"scripts": {
    "build": "libpack-scripts build",
    "postinstall": "libpack-scripts postinstall",
    "test": "libpack-scripts test"
  }
```

create file `libpack.config.js` setting to

```
const config = ["package-name", "package-name.1"];

module.exports = config;
```

create folder `packages` add package project

### example

folder packages

```
|_ packages
    |_ package-name
    |_ package-name.1
```

## Build

build all packages

`npm run build`

## Postinstall

install packages all project

`npm run postinstall`

## Test

test all packages

`npm run test`

## Support

<input type="checkbox" name="vehicle1" value="react" checked /> ReactJS
