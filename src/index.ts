import {FootballGameList} from './FootballGameList'
import {FooballReportBuilder} from "./FooballReportBuilder";

const footballGameReader = new FootballGameList('football.csv')

console.log(footballGameReader[0])

const footballGameReport = new FooballReportBuilder(footballGameReader)
console.log(footballGameReport.countManUnitedWin())

console.log(footballGameReport.dateFirstMatch())
