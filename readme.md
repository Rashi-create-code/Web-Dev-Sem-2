console.log([]+{}) gives [object Object]
as abjest is datatype and Object is a constructor
where as it print this because it converts into a string conacatenation bcz of '+'

1️⃣ console.log(1 + "1")
✅ Output
"11"

🔍 Reason

+ with a string triggers string concatenation

Number 1 is converted to string "1"

1 + "1" → "1" + "1" → "11"

2️⃣ console.log("1" - 1)
✅ Output
0

🔍 Reason

- does NOT concatenate

JS converts "1" to number 1

"1" - 1 → 1 - 1 → 0

3️⃣ console.log("5" * "2")
✅ Output
10

🔍 Reason

* forces numeric conversion

Both strings become numbers

"5" * "2" → 5 * 2 → 10

4️⃣ console.log(true + true)
✅ Output
2

🔍 Reason

true → 1

false → 0

true + true → 1 + 1 → 2

5️⃣ console.log(false + true)
✅ Output
1

🔍 Reason
false + true → 0 + 1 → 1

6️⃣ console.log(!!false)
✅ Output
false

🔍 Reason

!false → true

!!false → false

Double !! converts value to boolean

7️⃣ console.log(!!"false")
✅ Output
true

🔍 Reason

"false" is a non-empty string

All non-empty strings are truthy

!!"false" → true


⚠️ "false" ≠ false

8️⃣ console.log(!![])
✅ Output
true

🔍 Reason

Empty array is still an object

All objects are truthy

9️⃣ console,log([1,2] + [3,4])
❌ Output
ERROR

🔍 Reason

Typo: console,log ❌

Correct version 👇

✔ Correct Code
console.log([1,2] + [3,4])

✅ Output
"1,23,4"

🔍 Why?

Arrays converted to strings

[1,2] → "1,2"
[3,4] → "3,4"
"1,2" + "3,4" → "1,23,4"

🔟 console.log(0.1 + 0.2 === 0.3)
✅ Output
false

🔍 Reason (important 🔥)

Floating-point numbers stored in binary

0.1 + 0.2 = 0.30000000000000004

0.30000000000000004 !== 0.3


✔ Happens for both == and ===

1️⃣1️⃣ console.log([] + {})
✅ Output
"[object Object]"

🔍 Reason
[] → ""
{} → "[object Object]"
"" + "[object Object]" → "[object Object]"

1️⃣2️⃣ console.log(NaN == NaN)
✅ Output
false

🔍 Reason

NaN is never equal to anything, even itself

1️⃣3️⃣ console.log(NaN === NaN)
✅ Output
false

🔍 Same reason as above

✔ Correct way to check:

Number.isNaN(value)

1️⃣4️⃣ console.log([] == 0)
✅ Output
true

🔍 Reason
[] → "" → 0
0 == 0 → true

1️⃣5️⃣ console.log([] === 0)
✅ Output
false

🔍 Reason

=== checks type + value

Array ≠ Number

1️⃣6️⃣ console.log("" == 0)
✅ Output
true

🔍 Reason
"" → 0
0 == 0 → true

1️⃣7️⃣ console.log("" == [])
✅ Output
true

🔍 Reason
[] → ""
"" == "" → true