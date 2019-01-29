# collapsed-margin
Calculate the hypothetical vertical margin between two elements, which is automatically "collapsed" by CSS.

### Installation:
```
npm install --save collapsed-margin
```


### Usage:
```javascript
import collapsedMargin from 'collapsed-margin';

var el1 = document.getElementById('el1');
var el2 = document.getElementById('el2');

var spaceBetween = collapsedMargin(el1, el2);
```