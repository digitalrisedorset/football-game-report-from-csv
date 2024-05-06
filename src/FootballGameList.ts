import {CsvFileReader} from "./CsvFileReader";

export enum GameResult {
    homeWin = 'H',
    awayWin = 'A',
    draw = 'D'
}

export type MatchData = [Date, string, string, number, number, GameResult, string]

export const dateStringToDate = (dateString: string): Date => {
    const parts = dateString
        .split('/')
        .map((value:string) => {return parseInt(value)})
    return new Date(parts[2], parts[1] -1, parts[0])
}

export class FootballGameList {
    constructor(csvFileReader: CsvFileReader) {
        return csvFileReader.getData.map((row) => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as GameResult,
                row[6]
            ] as MatchData
        })
    }
}