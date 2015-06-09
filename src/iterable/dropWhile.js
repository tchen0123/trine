"use strict";

/**
 * Yields the first item that matches condition, and all the items after that.
 *
 * @this {Iterable<T>}
 * @param condition A condition called on every item to see if it should be dropped.
 * @ntime O(n)
 * @dspace O(1)
 * @example Basic Usage
 *
 * ```javascript
 * [1,2,3,4,1,2,3,4]::dropWhile(function () {
 *   return this &lt; 4;
 * }) // yields 4, 1, 2, 3, 4
 * ```
*/
export function * dropWhile <T> (
    condition : () => boolean,
) {
};