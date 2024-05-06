import fs from "fs";

export class CsvFileReader {
    private data: string[][]
    constructor(fileName: string) {
        this.read(fileName)
    }
    read(fileName: string): void {
        const matches = fs.readFileSync(fileName, {encoding:'utf-8'})
            .split('\n')
            .map((row:string) => {
                return row.split(',')
            })

        this.data = matches
    }
    get getData() {
        return this.data
    }
}