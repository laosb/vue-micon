# vue-micon

> **NOTE:** This is a fork of [`vue-material-icon`](https://github.com/achwilko/vue-material-icon) because the
upstream doesn't update for a while. It's fully compatible with the upstream right now, and version number are
following the upstream.

Vue.js (2.5+) functional component to display material icon.

## Installation
Using NPM:
```
npm install vue-micon -S
```

Using Yarn:
```
yarn add vue-micon
```

## Usage
In your `main.js` file:
```js
import VueMaterialIcon from 'vue-micon'

Vue.component(VueMaterialIcon.name, VueMaterialIcon)
```

In your components template:
```html
  <vue-material-icon name="favorite" :size="32" :color="red"></vue-material-icon>
```
- **name** - material icon name which can be find [here](https://material.io/icons/)
- **size** - icon size in px (24 is default)
