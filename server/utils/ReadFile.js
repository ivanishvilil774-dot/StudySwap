const fs = require('fs');

const readFile = async (filePath) => {
    try{
        const data = await fs.promises.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading file:', error);
        throw error;
    }
}

exports.readFile = readFile;