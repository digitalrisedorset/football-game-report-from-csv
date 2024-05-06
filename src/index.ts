import {CsvFileReader} from './CsvFileReader'
import {FooballReportBuilder} from "./FooballReportBuilder";
import {FootballGameList} from "./FootballGameList";

const fileReader = new CsvFileReader('football.csv')
const footballGameList = new FootballGameList(fileReader)

console.log(fileReader.getData[0])

const footballGameReport = new FooballReportBuilder(footballGameList)
console.log(footballGameReport.countManUnitedWin())

console.log(footballGameReport.dateFirstMatch())
