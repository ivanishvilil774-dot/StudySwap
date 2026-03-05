const fs = require('fs');
const writeFile = async (filePath, data) => {
    try {
        await fs.promises.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
    } catch (error) {
        console.error('Error writing file:', error);
        throw error;
    }  
}

module.exports = { writeFile };