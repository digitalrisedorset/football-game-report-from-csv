import fs from "fs";

export abstract class CsvFileReader<MatchType> {
    constructor(fileName: string) {
        return this.read(fileName)
    }
    abstract mapRow(row: string[]): MatchType;

    read(fileName: string): MatchType[] {
        return fs.readFileSync(fileName, {encoding:'utf-8'})
            .split('\n')
            .map((row:string) => {
                return row.split(',')
            }).map(this.mapRow)
    }
}