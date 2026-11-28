const taskQueue = [];

let isProcessing = false;

export function addBackgroundTask(task) {
  taskQueue.push(task);
  processQueue();
}

async function processQueue() {
  if (isProcessing) return;

  isProcessing = true;

  while (taskQueue.length > 0) {
    const task = taskQueue.shift();

    try {
      console.log("Processing background task:", task.id);

      await executeTask(task);

      console.log("Task completed:", task.id);
    } catch (error) {
      console.error("Task failed:", task.id, error.message);
    }
  }

  isProcessing = false;
}

async function executeTask(task) {
  // Simulate asynchronous processing
  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log("Background result:", task.data);
}