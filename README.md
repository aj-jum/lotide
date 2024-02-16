# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @webdev_torono/lotide`

**Require it:**

`const _ = require('@webdev_torono/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `_.head(array)`: Returns the first element of an array.
* `_.tail(array):` Returns a new array containing all elements of the original array except for the first one.
* `_.middle(array)`: Returns the middle element(s) of an array.
* `_.countLetters(string)`: Returns an object where keys are unique characters in the input string and values are the number of occurrences of each character.
* `_.countOnly(allItems, itemsToCount)`: Returns an object containing counts of specified items in the input array.
* `_.eqArrays(array1, array2)`: Checks if two arrays are equal.
* `_.eqObjects(object1, object2)`: Checks if two objects are equal.
* `_.findKey(object, callback)`: Returns the first key in the input object for which the callback function returns truthy.
* `_.findKeyByValue(object, value)`: Returns the first key in the input object that has the specified value.
* `_.letterPositions(string)`: Returns an object where keys are unique characters in the input string and values are arrays of the indices where each character occurs.
* `_.map(array, callback)`: Applies a callback function to each element of the input array and returns a new array of the results.
* `_.takeUntil(array, callback)`: Returns a slice of the input array with elements taken from the beginning until the callback function returns truthy.
* `_.without(source, itemsToRemove)`: Returns a new array with elements removed from the source array.
* `function2(...)`: description
* `function3(...)`: description