import Gest from "../index";

const gest = new Gest();

async function main() {
  const testVar = await gest.versions()
  console.log("🚀 ~ file: test.ts:7 ~ main ~ testVar:", testVar)
}
await main();
