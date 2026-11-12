import * as XLSX from 'xlsx';
import path from 'path';

export type LoginData = {

    username: string
    password: string
    expected: string
    run: string
}

export function readExcel(filePath: string, sheetName: string) : LoginData[]{

    const fullPath = path.resolve(filePath);
    //console.log('Full Path:', fullPath);
    const workbook = XLSX.readFile(fullPath);
    //console.log('Available Sheet Names:', workbook.SheetNames);
    const sheet = workbook.Sheets[sheetName];

    if (!sheet) {
        throw new Error(`Sheet "${sheetName}" not found in Excel file`);
    }

    const data = XLSX.utils.sheet_to_json<LoginData>(sheet);
    //console.log('Excel Reader Data:', data);
    return data;

}