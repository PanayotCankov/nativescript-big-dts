Running the TypeScript compiler wields the following stats:
```
nativescript-big-dts cankov$ tsc
Files:              27
Lines:           70612
Nodes:          264192
Identifiers:    103135
Symbols:       1095555
Types:           45569
Memory used:   239195K
I/O read:        0.00s
I/O write:       0.00s
Parse time:      0.61s
Bind time:       0.49s
Check time:      3.72s
Emit time:       0.00s
Total time:      4.83s
```
The `.d.ts` files are separated based on the native iOS frameworks but due categories dependencies suck in Foundation most of the SDK anyway.