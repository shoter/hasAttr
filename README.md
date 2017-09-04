# has Attr
JQuery plugin which adds new simple functionality :

* hasAttr - checks wheter attribute is present on given element(s)
* hasData - checks wheter given data attribute is present on given element(s)

#### Usage

#### hasAttr
Arguments:\
Name:string - name of the attribute

Returns:\
True when attribute is present, otherwise false.

Example:
```HTML
<p class="test">something</p>
```
``` JAVASCRIPT
$("#p").hasAttr("class")
```
returns true

#### hasData
Arguments:\
Name:string - name of the data

Returns:\
True when attribute is present, otherwise false.

Example:
```HTML
<p data-test>something</p>
```
``` JAVASCRIPT
$("#p").hasData("test")
```
returns true



