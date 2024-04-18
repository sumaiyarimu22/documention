import fs from "fs";
import path from "path";

const postDirectory = path.join(process.cwd(), "docs");

export function getDocuments() {
  const fileNames = fs.readdirSync(postDirectory);

  const allDocuments = fileNames.map((filename) => {
    const id = filename.replace(".md", "");
    const fullPath = path.join(postDirectory, filename);
    return fullPath;
  });
  console.log(allDocuments);
  // console.log(fileNames);
  // console.log(postDirectory);
  // console.log(allDocuments);
}
