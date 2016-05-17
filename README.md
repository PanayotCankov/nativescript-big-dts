Running the TypeScript compiler wields the following stats:
```
nativescript-big-dts cankov$ tsc
Files:              33
Lines:           62528
Nodes:          222775
Identifiers:     87597
Symbols:        765649
Types:           49240
Memory used:   224502K
I/O read:        0.00s
I/O write:       0.00s
Parse time:      0.61s
Bind time:       0.38s
Check time:      3.61s
Emit time:       0.00s
Total time:      4.60s
```
The `.d.ts` files are separated based on the native iOS frameworks but due categories dependencies suck in Foundation most of the SDK anyway.