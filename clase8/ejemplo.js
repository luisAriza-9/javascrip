const readFile = async (fileName) => {
    console.log(`Reading file: ${fileName}`);
    const fileContent = await new Promise((resolve, reject) => {
      // Simulate asynchronous file reading using setTimeout
      setTimeout(() => {
        if (fileName === "data.txt") {
          resolve("This is the content of data.txt");
        } else {
          reject(new Error(`Failed to read file: ${fileName}`));
        }
      }, 2000);
    });
    return fileContent;
  };
  
  const processData = async (fileContent) => {
    console.log(`Processing data: ${fileContent}`);
    const processedData = fileContent.toUpperCase();
    return processedData;
  };
  
  async function main() {
    try {
      const fileContent = await readFile("data.txt");
      const processedData = await processData(fileContent);
      console.log("Processed data:", processedData);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  main();
  