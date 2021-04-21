## How to use / import

First of all, install the package by using `npm` or `yarn` by tapping:

```javascript
npm install console.browser --save
//or
yarn add console.browser
```

You only need to import the package by destructuring the module :

```javascript
const { console } = require("console.browser");
console.nor("Hey");
```

This will return the console object with more colors

If you want to nest colors you can take/add an other variable in the destructuring:

```javascript
const { console, colors } = require("console.browser");
console.warn(
	"Hey",
	colors.inverse("Inverse this!"),
	colors.rainbow("I'm a rainbow !!")
);
```

## Members

<dl>
<dt><a href="#nor">nor</a> ⇒</dt>
<dd><p>Outputs a message to the console
Equivalent to console.log but outputs the data in a blue tint to be more visible when logging information</p>
</dd>
<dt><a href="#success">success</a> ⇒</dt>
<dd><p>Outputs a success message to the console</p>
</dd>
<dt><a href="#error">error</a> ⇒</dt>
<dd><p>Outputs an error message to the console
When debugging for example in a <code>try{}catch{}</code></p>
</dd>
<dt><a href="#warn">warn</a> ⇒</dt>
<dd><p>Outputs a warning message to the console with a yellow color</p>
</dd>
<dt><a href="#info">info</a> ⇒</dt>
<dd><p>Outputs an informational message to the console</p>
</dd>
<dt><a href="#rainbow">rainbow</a> ⇒</dt>
<dd><p>Outputs the multicolored data</p>
</dd>
<dt><a href="#zebra">zebra</a> ⇒</dt>
<dd><p>Outputs the data in black and white</p>
</dd>
<dt><a href="#bold">bold</a> ⇒</dt>
<dd><p>Outputs the data in bold</p>
</dd>
<dt><a href="#dim">dim</a> ⇒</dt>
<dd><p>Outputs the data in dim</p>
</dd>
<dt><a href="#inverse">inverse</a> ⇒</dt>
<dd><p>Outputs the inverse of the given data</p>
</dd>
<dt><a href="#italic">italic</a> ⇒</dt>
<dd><p>Outputs the data in italic</p>
</dd>
<dt><a href="#underline">underline</a> ⇒</dt>
<dd><p>Underlines the data</p>
</dd>
<dt><a href="#allown">allown</a> ⇒</dt>
<dd><p>Isolates that given data to be more visible</p>
</dd>
<dt><a href="#newline">newline</a> ⇒</dt>
<dd><p>Shows each argument on a new line.</p>
</dd>
<dt><a href="#json">json</a> ⇒</dt>
<dd><p>Shows each argument on a new line in a json format</p>
</dd>
</dl>

<a name="nor"></a>

## nor ⇒

Equivalent to console.log but outputs the data in a blue tint to be more visible when logging information

**Kind**: global variable
**Returns**: Data with a blue tinit

| Param   | Type             | Description        |
| ------- | ---------------- | ------------------ |
| ...args | <code>any</code> | The data to output |

<a name="success"></a>

## success ⇒

Outputs a success message to the console

**Kind**: global variable
**Returns**: Data with green color

| Param   | Type             | Description        |
| ------- | ---------------- | ------------------ |
| ...args | <code>any</code> | The data to output |

**Example**

```js
console.success("I just hacked Nasaaaaaaaaaaa !");
```

<a name="error"></a>

## error ⇒

When debugging for example in a `try{}catch{}`

**Kind**: global variable
**Returns**: Data with red color

| Param   | Type             | Description        |
| ------- | ---------------- | ------------------ |
| ...args | <code>any</code> | The data to output |

**Example**

```js
console.error("OMG! I just did a stupid error!");
```

<a name="warn"></a>

## warn ⇒

Outputs a warning message to the console with a yellow color

**Kind**: global variable
**Returns**: Data with yellow color

| Param   | Type             | Description        |
| ------- | ---------------- | ------------------ |
| ...args | <code>any</code> | The data to output |

**Example**

```js
console.warn("The world will end in one week !");
```

<a name="info"></a>

## info ⇒

Outputs an informational message to the console

**Kind**: global variable
**Returns**: Data with dark blue color

| Param   | Type             | Description        |
| ------- | ---------------- | ------------------ |
| ...args | <code>any</code> | The data to output |

**Example**

```js
console.info(
	"Did you know that Leonard de Vinci was born in 1452 in Anchiano ?"
);
```

<a name="rainbow"></a>

## rainbow ⇒

Outputs the multicolored data

**Kind**: global variable
**Returns**: Rainbow output

| Param   | Type             | Description        |
| ------- | ---------------- | ------------------ |
| ...args | <code>any</code> | The data to output |

**Example**

```js
console.rainbow(
	"The way I see it, if you want the rainbow, you gotta put up with the rain."
);
```

<a name="zebra"></a>

## zebra ⇒

Outputs the data in black and white

**Kind**: global variable
**Returns**: Zebra output

| Param   | Type             | Description        |
| ------- | ---------------- | ------------------ |
| ...args | <code>any</code> | The data to output |

**Example**

```js
console.zebra(`Wait am i in savanna ?`);
```

<a name="bold"></a>

## bold ⇒

Outputs the data in bold

**Kind**: global variable
**Returns**: Bold output

| Param   | Type             | Description        |
| ------- | ---------------- | ------------------ |
| ...args | <code>any</code> | The data to output |

**Example**

```js
console.bold("I'm bold");
```

<a name="dim"></a>

## dim ⇒

Outputs the data in dim

**Kind**: global variable
**Returns**: Dim output

| Param   | Type             | Description        |
| ------- | ---------------- | ------------------ |
| ...args | <code>any</code> | The data to output |

**Example**

```js
console.dim("I'm a dim output !");
```

<a name="inverse"></a>

## inverse ⇒

Outputs the inverse of the given data

**Kind**: global variable
**Returns**: Inverse of the data

| Param   | Type             | Description        |
| ------- | ---------------- | ------------------ |
| ...args | <code>any</code> | The data to output |

**Example**

```js
console.inverse("I'm a inverse output !");
```

<a name="italic"></a>

## italic ⇒

Outputs the data in italic

**Kind**: global variable
**Returns**: Italic output

| Param   | Type             | Description        |
| ------- | ---------------- | ------------------ |
| ...args | <code>any</code> | The data to output |

**Example**

```js
console.italic("I'm in italic !");
```

<a name="underline"></a>

## underline ⇒

Underlines the data

**Kind**: global variable
**Returns**: Underlined output

| Param   | Type             | Description        |
| ------- | ---------------- | ------------------ |
| ...args | <code>any</code> | The data to output |

**Example**

```js
console.underline("I'm underlined !");
```

<a name="allown"></a>

## allown ⇒

Isolates that given data to be more visible

**Kind**: global variable
**Returns**: Isolated output

| Param   | Type             | Description        |
| ------- | ---------------- | ------------------ |
| ...args | <code>any</code> | The data to output |

**Example**

```js
console.allown("This is isolated from the rest of the console");
```

<a name="newline"></a>

## newline ⇒

Shows each argument on a new line.

**Kind**: global variable
**Returns**: Each argument on a new line

| Param   | Type             | Description        |
| ------- | ---------------- | ------------------ |
| ...args | <code>any</code> | The data to output |

**Example**

```js
console.newline(
	"This is on the first line",
	"This is on the second line",
	"This is on the third line"
);
```

<a name="json"></a>

## json ⇒

Shows each argument on a new line in a json format

**Kind**: global variable
**Returns**: Each argument on a new line

| Param   | Type             | Description        |
| ------- | ---------------- | ------------------ |
| ...args | <code>any</code> | The data to output |

**Example**

```js
console.json(name, surname, username); //equivalent to writing console.log({name}, "\n", {surname}, "\n", {username})
```
