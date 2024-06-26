import {CsvFileReader} from "./CsvFileReader";

export class FootballGameList extends CsvFileReader<MatchData>{
    mapRow(row: string[]): MatchData {
        return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as GameResult,
            row[6]
        ] as MatchData
    }
}