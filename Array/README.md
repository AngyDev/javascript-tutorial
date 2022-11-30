# Table of Array methods

| Method  | Description                                | Parameters                            | Returns                                                                        | Mutating           |
| ------- | ------------------------------------------ | ------------------------------------- | ------------------------------------------------------------------------------ | ------------------ |
| POP     | Removes the last element                   | ()                                    | The removed element                                                            | :white_check_mark: |
| SHIFT   | Removes the first element                  | ()                                    | The removed element                                                            | :white_check_mark: |
| PUSH    | Adds the element to the end                | (value)                               | Returns the new length                                                         | :white_check_mark: |
| UNSHIFT | Adds the element to the start              | (value)                               | Returns the new length                                                         | :white_check_mark: |
| CONCAT  | Adds the element to the end                | (), (value), (value1,..., valueN)     | Returns the new length                                                         | :x:                |
| SPLICE  | Adds/Removes the element from start to end | (start, deleteCount, item1,...,itemN) | Returns the array with the new elements or the array with the removed elements | :white_check_mark: |
| SLICE   | Removes the element from start to end      | (), (start, end)                      | Returns the array or the removed element                                       | :x:                |
