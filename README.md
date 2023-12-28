# SCSS LAYOUTS
## A SCSS lib to make easy the apply some syles using css classes.

### Demo
*  [Demo Source Code](https://ferreirarubens.github.io/scss-layout/)

Check the [CHANGELOG](CHANGELOG.md) for the latest changes.

- margin
- padding
- height
- width
- display flex
- elevation (box-shadow)
- material design color palette (background color and color)

## Instalation

### Download 
Download file at dist/css/layout.min.css to get minify css file and add into html
### Add npm module
- install npm module
```sh
 npm install scss-layout --save
```
- get the scss from node_modules
```sh
 @import 'node_modules/scss-layout/scss/core'
```

## Usage Elevation
> There are 4 levels (1 - 4)
to have level 2 of elevation
```sh
  class="elevation-2"
```

## Usage (Margin) in px

to margin-top

```sh
class="mt-4"
```

to margin-bottom

```sh
class="mb-4"
```

to both vertical margin

```sh
class="my-4"
```

to all margins

```sh
class="m-4"
```

## Usage (Padding) in px

to padding-top

```sh
class="pt-4"
```

to padding-bottom

```sh
class="pb-4"
```

to both vertical padding

```sh
class="py-4"
```

to all paddings

```sh
class="p-4"
```

## Usage (Height) in px

to height 100px or 100%

```sh
class="h-100"
```

## Usage (Height) in %

to height 100%

```sh
class="h100"
```

## Usage (Width) in px

to width 100px

```sh
class="w-100"
```

## Usage (Width) in %

to width 100%

```sh
class="w100"
```

## Usage (Width and Height) in px

to width and height 100px (0 to 500)

```sh
class="wh-100"
```

## Usage (Width and Height) in %

to width and height 100% (0 to 100)

```sh
class="wh100"
```

## Usage Display Flex

### Flex Direction
```sh
class="fx-col"
class="fx-row"
```

### Flex Gap
to space between elements 20px - 0 to 500
```sh
class="fx-gap-20"
```

### Flex Width (%)
to height or width in % 0 to 100
```sh
class="fx-20"
```

### Flex Align
```sh
class="fx-center-start"
class="fx-center-end"
class="fx-center-center"
class="fx-center-stretch"
```

```sh
class="fx-start-start"
class="fx-start-end"
class="fx-start-center"
class="fx-start-stretch"
```

```sh
class="fx-end-start"
class="fx-end-end"
class="fx-end-center"
class="fx-end-stretch"
```

```sh
class="fx-between-start"
class="fx-between-end"
class="fx-between-center"
class="fx-between-stretch"
```

```sh
class="fx-around-start"
class="fx-around-end"
class="fx-around-center"
class="fx-around-stretch"
```

```sh
class="fx-evenly-start"
class="fx-evenly-end"
class="fx-evenly-center"
class="fx-evenly-stretch"
```

## Usage material design color palette
> must import the scss file
- create a material palette (example)
```
$palette: (
  50: #e4e9ee,
  100: #bbc9d4,
  200: #8ea5b8,
  300: #60809b,
  400: #3e6585,
  500: #1c4a70,
  600: #194368,
  700: #143a5d,
  800: #005079,
  900: #092241,
  A100: #79adff,
  A200: #468eff,
  A400: #136fff,
  A700: #0061f8,
  contrast: (
    50: #000000,
    100: #000000,
    200: #000000,
    300: #ffffff,
    400: #ffffff,
    500: #ffffff,
    600: #ffffff,
    700: #ffffff,
    800: #ffffff,
    900: #ffffff,
    A100: #ffffff,
    A200: #ffffff,
    A400: #ffffff,
    A700: #ffffff,
  ),
);
```
- Include the @mixin material-palette (should pass true if the palette is from 50 to 900 only)
```
@include material-palette($palette, 'primary-example');
```
- Get the color from palette
```sh
background-color: palette-color($palette);
background-color: palette-color($palette, 500);
```
- Get the contrast color from palette
```sh
color: palette-color-contrast($palette);
color: palette-color-contrast($palette, 500);
```
- Using color primary from $palette (.mat-color)
```sh
class="mat-color-primary-example"
class="mat-color-primary-example-A200"
```

## Usage mixins
### flex
```sh
@include flex('column') // to column
@include flex() // to row
```
### flex-gap
```sh
@include flex-row-gap(20) // to row
@include flex-col-gap(20) // to column
```

### flex-aligh
```sh
@include flex-align('center-center')
```
> check options on [Flex Align](#Flex-Align)

## Todos

- Write MORE styles

## Tools

- IDE: _Vs Code_

## Extensions: 
| Name | Link |
| --------- | ----- |
| Live Sass Compiler | [![Badge for version for Visual Studio Code extension ritwickdey.live-sass](https://vsmarketplacebadge.apphb.com/version-short/ritwickdey.live-sass.svg?color=blue&style=?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass&wt.mc_id=angularessentials-github-jopapa) |
| Live Server | [![Badge for version for Visual Studio Code extension ritwickdey.live-sass](https://vsmarketplacebadge.apphb.com/version-short/ritwickdey.live-sass.svg?color=blue&style=?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=angularessentials-github-jopapa.mc_id=angularessentials-github-jopapa) |

## License

MIT
