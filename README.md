# @jasonk/eslint-config #

> My [ESLint](https://eslint.org/) configs.

## Rules ##

The rules in this package are grouped into rough categories to help
with maintenance.  The rules categories are:

## Options ##

There are several sets of rules included in this repo that are
intended to be suitable for different types of projects.  You can pick
which one you want to use simply by extending it in your own ESLint
configuration.

The available options are:

* babel - For projects transpiled with babel (includes es6)
* browser - For browser-based projects.
* es5 - For projects using ES5
* es6 - For projects using ES6 (includes es5)
* react - For projects using React (includes babel+browser)
* tests - Rules for test files

## Installing

First, in your package repository directory, install all the core
dependencies that you will need.

```
yarn add -D eslint eslint-plugin-babel \
    eslint-plugin-chai-expect \
    eslint-plugin-dependencies \
    eslint-plugin-eslint-comments \
    eslint-plugin-import \
    eslint-plugin-jsdoc \
    eslint-plugin-json \
    eslint-plugin-jsx-a11y \
    eslint-plugin-lodash \
    eslint-plugin-mocha \
    eslint-plugin-node \
    eslint-plugin-promise \
    eslint-plugin-react \
    eslint-plugin-react-hooks \
    eslint-plugin-should-promised
```

## Contributing ##

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details about our
contribution process.  Make sure you have also read
[CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

## Versioning ##

I use [SemVer](http://semver.org/) for versioning. For the versions
available, see the [tags on this repository][tags].

## Authors ##

* **Jason Kohles** - [jasonk](https://github.com/jasonk)

See also the list of [contributors][contribs] who participated in this
project.

## License ##

This project is licensed under the MIT License - see the
[LICENSE](./LICENSE) file for details.

[contribs]: https://github.com/jasonk/eslint-config/contributors
[tags]: https://github.com/jasonk/eslint-config/tags
