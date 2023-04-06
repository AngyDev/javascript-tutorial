# Table of Array methods

| Method  | Description                                 | Parameters                            | Returns                                                                     | Mutating           |
| ------- | ------------------------------------------- | ------------------------------------- | --------------------------------------------------------------------------- | ------------------ |
| POP     | Removes the last element                    | ()                                    | The removed element                                                         | :white_check_mark: |
| SHIFT   | Removes the first element                   | ()                                    | The removed element                                                         | :white_check_mark: |
| PUSH    | Adds the element to the end                 | (value)                               | The new length                                                              | :white_check_mark: |
| UNSHIFT | Adds the element to the start               | (value)                               | The new length                                                              | :white_check_mark: |
| CONCAT  | Adds the element to the end                 | (), (value), (value1,..., valueN)     | The new length                                                              | :x:                |
| SPLICE  | Adds/Removes the element from start to end  | (start, deleteCount, item1,...,itemN) | The array with the new elements or the array with only the removed elements | :white_check_mark: |
| SLICE   | Makes a shallow copy of a portion of  array | (), (start, end)                      | The selected part of the array                                              | :x:                |
| FILL    | Changes all elements in the array           | (value, start, end)                   | The array with the new elements                                             | :white_check_mark: |
| SORT    | Sorts all elements in the array           | (), (compareFn)                   | The array with the sorted elements                                             | :white_check_mark: |