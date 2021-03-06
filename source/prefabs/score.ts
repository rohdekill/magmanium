import {Counter} from "../util/counter";

/*
 * Score
 *
 * Simple game score UI element based on a counter.
 */
export class Score {
    constructor(game: Phaser.Game, x: number, y: number, score: Counter) {
        const style = { font: "32px Arial", fill: "#fff" };
        this.txt = game.add.text(x, y, score.value.toString(), style);
        this.txt.fixedToCamera = true;

        score.signal.add((n: number) => {
            this.txt.setText(n.toString());
        }, this);
    }

    private txt: Phaser.Text;
}