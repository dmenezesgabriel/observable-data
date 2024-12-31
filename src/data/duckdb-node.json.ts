import { DuckDBInstance } from "@duckdb/node-api";

const instance = await DuckDBInstance.create(":memory:");
const connection = await instance.connect();

const result = await connection.run("select 42 as result");

process.stdout.write(JSON.stringify(await result.getRows()));
