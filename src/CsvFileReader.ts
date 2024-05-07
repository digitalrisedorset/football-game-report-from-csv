import fs from "fs";

export interface DataReader {
    read(): string[][];
}

export class CsvFileReader implements DataReader {
    private fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName
    }

    read(): string[][] {
        return fs.readFileSync(this.fileName, {encoding:'utf-8'})
            .split('\n')
            .map((row:string) => {
                return row.split(',')
            })
    }
}