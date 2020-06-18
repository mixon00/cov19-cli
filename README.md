# cov19

[![npm](https://img.shields.io/npm/v/@mixon00/cov19.svg)][npm-link]
[![license](https://img.shields.io/github/license/mixon00/cov19-cli.svg)][mit-license]
[![npm](https://img.shields.io/npm/dm/@mixon00/cov19.svg)][npm-link]
[![ko-fi](https://img.shields.io/badge/Buy_me_a-coffee-F16061.svg)][kofi-donation]
![github](https://img.shields.io/github/stars/mixon00/cov19-cli.svg?style=social)
[![twitter](https://img.shields.io/twitter/follow/mixon00.svg?&style=social)][twitter-url]

## Installation

```sh
$ npm i -g @mixon00/cov19
```

## Usage

### Get stats for world and watched countries

```sh
$ cov19
```

<p align="center">
 <img src="https://raw.githubusercontent.com/mixon00/cov19-cli/master/docs/render1592521435578.gif">
</p>

### Get stats for country by country name

```sh
$ cov19 Poland
```

### or country code

```sh
$ cov19 pl
```

### or state

```sh
$ cov19 "New York"
```

<p align="center">
 <img src="https://raw.githubusercontent.com/mixon00/cov19-cli/master/docs/render1592406947334.gif">
</p>

### Add to favourites

```sh
$ cov19 Poland -a
```

or

```sh
$ cov19 Poland --add
```

<p align="center">
 <img src="https://raw.githubusercontent.com/mixon00/cov19-cli/master/docs/render1592521726425.gif">
</p>

### Remove from favourites

```sh
$ cov19 Poland -r
```

or

```sh
$ cov19 Poland --remove
```

### Remove more then one element from favourites

```sh
$ cov19 -r
```

<p align="center">
 <img src="https://raw.githubusercontent.com/mixon00/cov19-cli/master/docs/render1592522822747.gif">
</p>

### Display list of favourites

```sh
$ cov19 -l
```

or

```sh
$ cov19 --list
```

<p align="center">
 <img src="https://raw.githubusercontent.com/mixon00/cov19-cli/master/docs/render1592523398745.gif">
</p>

## Prerequisites

Before running this locally you must have these installed

- [Node](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Contributing

1. 🍴 Fork repo!
2. 🌈🌈🌈 **_DO MAGIC!_** 🌈🌈🌈
3. 🔃 Create a new pull request.

Feel free to contribute to this project. 😊

## License

Code copyright 2020 Mateusz Misztoft. Code released under [MIT License][mit-license]

[mit-license]: https://github.com/mixon00/cov19-cli/blob/master/LICENSE
[npm-link]: https://www.npmjs.com/package/@mixon00/cov19
[twitter-url]: https://twitter.com/mixon00
[kofi-donation]: https://ko-fi.com/Y8Y6NZPR
