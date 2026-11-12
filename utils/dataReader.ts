import path from 'path'
import fs, { readFileSync } from 'fs';
import { readCSV } from '../utils/csvReader';
import { readExcel } from '../utils/excelReader';

export function readData(filePath: string, sheetName?: string) {

    const ext = path.extname(filePath).toLowerCase();

    switch (ext) {

        case ".csv":
            console.log(".. I am reading CSV..");
            return readCSV(filePath);

        case ".xlsx":
            if (!sheetName) {
                throw new Error('Sheet name is required for Excel files');
            }
            return readExcel(filePath, sheetName);

        case ".json":
            console.log(".. I am reading JSON..");
            const JSONData = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(JSONData)

        default:
            throw new Error(`Unsupported file type - ${ext}`);
    }

}