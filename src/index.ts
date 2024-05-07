import {MatchReader} from './MatchReader'
import {CsvFileReader} from './CsvFileReader'
import {FooballReportBuilder} from "./FooballReportBuilder";

const csvFileReader = new CsvFileReader('football.csv')
const footballGameReader = new MatchReader(csvFileReader)
const footballGameList = footballGameReader.load()

console.log(footballGameList[0])

const footballGameReport = new FooballReportBuilder(footballGameList)
console.log(footballGameReport.countManUnitedWin())

console.log(footballGameReport.dateFirstMatch())
