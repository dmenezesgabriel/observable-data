# Polars Node.Js API

Using Polars Node.Js as a _data loader_.

## At Build time

```ts run=false echo
// ./data/polars-node.json.ts
import pl from "nodejs-polars";

const df = pl.DataFrame({
  A: [1, 2, 3, 4, 5],
  fruits: ["banana", "banana", "apple", "apple", "banana"],
  B: [5, 4, 3, 2, 1],
  cars: ["beetle", "audi", "beetle", "beetle", "beetle"],
});

process.stdout.write(df.toJSON());
```

## On Client Side

```ts echo
const polarsTable = await FileAttachment("../../data/polars-node.json").json();

display(polarsTable);
```

## Reference

- [nodejs-polars docs](https://github.com/pola-rs/nodejs-polars)
