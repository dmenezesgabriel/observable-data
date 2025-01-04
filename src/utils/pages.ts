import fs from "node:fs";
import path from "node:path";

const fileGroups = fs
  .readdirSync("./src", {
    recursive: true,
    withFileTypes: true,
  })
  .filter((dirent) => dirent.isFile() && dirent.name.endsWith(".md"))
  .reduce((acc, dirent) => {
    if (!acc.hasOwnProperty(dirent.parentPath)) {
      acc[dirent.parentPath] = [];
    }

    const name = dirent.name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
      .slice(0, dirent.name.length - 3);

    const page = {
      name: name,
      path: path.join(
        dirent.parentPath
          .split("/")
          .slice(1, dirent.parentPath.length)
          .join("/"),
        dirent.name.slice(0, -3)
      ),
    };

    acc[dirent.parentPath].push(page);

    return acc;
  }, {});

export const pages = Object.entries(fileGroups)
  .map(([key, value]) => {
    const name = key
      .split("/")
      .filter((_, index) => {
        return key.split("/").length - 1 === index;
      })
      .at(0)
      ?.split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return { name, open: true, pages: value };
  })
  .filter((section) => section.name?.toLocaleLowerCase() !== "src");
