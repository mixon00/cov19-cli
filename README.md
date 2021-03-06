<p align="center">
 <img src="https://repository-images.githubusercontent.com/272448130/983ae580-b23c-11ea-874a-e8ce6fc2d7f5">
</p>

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

### Get stats for world and favourites countries

```sh
$ cov19
```

<p align="center">
 <img src="https://raw.githubusercontent.com/mixon00/cov19-cli/master/docs/render1593015600432.gif">
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
 <img src="https://raw.githubusercontent.com/mixon00/cov19-cli/master/docs/render1593015314848.gif">
</p>

### Show detailed stats

```sh
$ cov19 -s
```

or

```sh
$ cov19 Poland -s
```

<p align="center">
 <img src="https://raw.githubusercontent.com/mixon00/cov19-cli/master/docs/render1593016893891.gif">
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
 <img src="https://raw.githubusercontent.com/mixon00/cov19-cli/master/docs/render1593014914515.gif">
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
 <img src="https://raw.githubusercontent.com/mixon00/cov19-cli/master/docs/render1593016145609.gif">
</p>

### Limit displayed results

```sh
$ cov19 us -l <limit>
$ cov19 us -l 3
```

### or limit displayed result starting from selected position

```sh
$ cov19 us -l <from:limit>
$ cov19 us -l 2:5
```

<p align="center">
 <img src="https://raw.githubusercontent.com/mixon00/cov19-cli/master/docs/render1593017962811.gif">
</p>

### Display list of favourites

```sh
$ cov19 -f
```

or

```sh
$ cov19 --favourites
```

<p align="center">
 <img src="https://raw.githubusercontent.com/mixon00/cov19-cli/master/docs/render1593016045911.gif">
</p>

### Show about tool

```sh
$ cov19 --about
```


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
