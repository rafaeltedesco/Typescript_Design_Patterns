import fs from "fs/promises";

const readJSONFile = async (filePath: string) => {
  return JSON.parse(await fs.readFile(filePath, "utf-8"));
};

export default readJSONFile;
