import {FootballGameList, GameResult, MatchData} from "./FootballGameList";

export class FooballReportBuilder {
    private footballGameList: FootballGameList;
    constructor(footballGameList: FootballGameList) {
        this.footballGameList = footballGameList
    }
    countManUnitedWin(): number {
        let numberManHomeWins = 0
        this.footballGameList.reduce((previousRow, game: MatchData) => {
            if ((game[1] === 'Man United') && game[5] === GameResult.homeWin) {
                numberManHomeWins += 1
            }

            if ((game[2] === 'Man United') && (game[5] === GameResult.awayWin)) {
                numberManHomeWins += 1
            }
        }, numberManHomeWins)

        return numberManHomeWins
    }
    dateFirstMatch(): Date {
        const game = this.footballGameList[0]
        return game[0]
    }
}