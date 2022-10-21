import { hPermute, matchEdge } from "./util.js";

class TwoByTwoBoardSolver {
    constructor(card1, card2, card3, card4) {
        this.cards = [card1, card2, card3, card4];
        this.permutations = hPermute(this.cards);
        this.results = [];

        this.permutations.forEach(permutation => {
            let cards = [permutation[0], permutation[1], permutation[2], permutation[3]];
            for (let i = 0; i < 4; i++) {
                cards[0].rotateRight();
                for (let j = 0; j < 4; j++) {
                    cards[1].rotateRight();
                    for (let k = 0; k < 4; k++) {
                        cards[2].rotateRight();
                        for (let l = 0; l < 4; l++) {
                            cards[3].rotateRight();
                            if (matchEdge(cards[0].right, cards[1].left) && matchEdge(cards[0].bottom, cards[2].top) && matchEdge(cards[1].bottom, cards[3].top) && matchEdge(cards[2].right, cards[3].left)) {
                                this.results.push(JSON.stringify(cards));
                            }
                        }
                    }
                }
            }
        });
    }
}

export {TwoByTwoBoardSolver};