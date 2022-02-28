
let uuid = require('uuid').v4;
export async function quickRender(filePath) {
    return {
        status: "success",
        filePath: filePath,
        id: uuid().slice(0,8),
    }
}

export async function scheduledCleanup() {
    // This method will should be called every 5 minutes
}