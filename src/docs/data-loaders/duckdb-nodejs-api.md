---
title: DuckDB Node.Js API
---

# DuckDB Node.Js API

Using DuckDB Node.Js API as a _data loader_.

## At Build time

```ts run=false echo
// ./data/duckdb-node.json.ts
import { DuckDBInstance } from "@duckdb/node-api";

const instance = await DuckDBInstance.create(":memory:");
const connection = await instance.connect();

const result = await connection.run("select 42 as result");

process.stdout.write(JSON.stringify(await result.getRows()));
```

## On Client Side

```ts echo
const duckTable = await FileAttachment("../../data/duckdb-node.json").json();

// Array:
display(duckTable);

// Table
display(Inputs.table(duckTable));
```

## Reference

- [@duckdb/node-api docs](https://duckdb.org/docs/api/node_neo/overview)
