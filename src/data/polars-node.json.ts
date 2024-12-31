import pl from "nodejs-polars";

const df = pl.DataFrame({
  A: [1, 2, 3, 4, 5],
  fruits: ["banana", "banana", "apple", "apple", "banana"],
  B: [5, 4, 3, 2, 1],
  cars: ["beetle", "audi", "beetle", "beetle", "beetle"],
});

process.stdout.write(df.toJSON());
