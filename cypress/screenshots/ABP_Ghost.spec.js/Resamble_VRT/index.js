const playwright = require("playwright");
const compareImages = require("resemblejs/compareImages");
const config = require("./config.json");
const fs = require("fs");

const { viewportHeight, viewportWidth, browsers, options } = config;

async function executeTest() {
  if (browsers.length === 0) {
    return;
  }
  let resultInfo = {};
  let scenario = "Escenario_01";
  for (b of browsers) {
    if (!b in ["chromium"]) {
      return;
    }
    if (!fs.existsSync(`../${scenario}`)) {
      fs.mkdirSync(`../results/${scenario}`, { recursive: true });
    }
    const files = fs.readdirSync(`../${scenario}`);
    const fileNames = [];
    for (const file of files) {
      if (
        file.includes("compare") ||
        file.includes("report") ||
        file.includes("index")
      ) {
        fs.unlinkSync(`../${scenario}/${file}`);
      } else if (!file.includes("Before")) {
        fileNames.push(file);
        config.steps.push(file);
      }
    }
    const browser = await playwright[b].launch({
      headless: true,
      viewport: { width: viewportWidth, height: viewportHeight },
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await browser.close();

    for (let filenName of fileNames) {
      const data = await compareImages(
        fs.readFileSync(`../${scenario}/Before_${filenName}`),
        fs.readFileSync(`../${scenario}/${filenName}`),
        options
      );
      resultInfo[filenName] = {
        isSameDimensions: data.isSameDimensions,
        dimensionDifference: data.dimensionDifference,
        rawMisMatchPercentage: data.rawMisMatchPercentage,
        misMatchPercentage: data.misMatchPercentage,
        diffBounds: data.diffBounds,
        analysisTime: data.analysisTime,
      };
      fs.writeFileSync(`../${scenario}/compare-${filenName}`, data.getBuffer());
    }
  }
  fs.writeFileSync(
    `../${scenario}/report.html`,
    createReport(scenario, resultInfo)
  );
  fs.copyFileSync("./index.css", `../${scenario}/index.css`);
  console.log(
    "------------------------------------------------------------------------------------"
  );
  console.log("Execution finished. Check the report under the results folder");
  return resultInfo;
}
(async () => console.log(await executeTest()))();

function browser(b, info) {
  return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Step: ${b}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="before_${b}" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="${b}" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./compare-${b}" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`;
}

function createReport(scenario, resInfo) {
  return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="#">Regresión Visual - Ghost ABP V3.42 vs V4.42</a>
            </h1>
            <p>Executed: ${scenario}</p>
            <div id="visualizer">
                ${config.steps.map((b) => browser(b, resInfo[b]))}
            </div>
        </body>
    </html>`;
}
