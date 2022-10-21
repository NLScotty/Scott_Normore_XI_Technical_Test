import { hPermute, matchEdge, lSubset } from "./util.js";

class ThreeByThreeBoardSolver {
    constructor(card1, card2, card3, card4, card5, card6, card7, card8, card9) {
        this.cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9];
        this.subsets = lSubset(this.cards, 5);
        this.permutations = [];
        this.subsets.forEach(subset => {
            let p = hPermute(subset);
            p.forEach(permuation => {
                this.permutations.push(permuation);
            });
        });
        this.results = [];

        this.permutations.forEach(permutation => {
            let centerCards = [permutation[0], permutation[1], permutation[2], permutation[3], permutation[4]];
            for (let i = 0; i < 4; i++) {
                centerCards[1].rotateRight();
                for (let j = 0; j < 4; j++) {
                    centerCards[2].rotateRight();
                    for (let k = 0; k < 4; k++) {
                        centerCards[3].rotateRight();
                        for (let l = 0; l < 4; l++) {
                            centerCards[4].rotateRight();
                            if (matchEdge(centerCards[0].top, centerCards[1].bottom) &&
                                matchEdge(centerCards[0].right, centerCards[2].left) &&
                                matchEdge(centerCards[0].bottom, centerCards[3].top) &&
                                matchEdge(centerCards[0].left, centerCards[4].right)) {
                                let difference = this.cards.filter(x => !centerCards.includes(x));
                                let cornerPermuations = hPermute(difference);
                                cornerPermuations.forEach(permutation => {
                                    let cornerCards = [permutation[0], permutation[1], permutation[2], permutation[3]];
                                    for (let m = 0; m < 4; m++) {
                                        cornerCards[0].rotateRight();
                                        for (let n = 0; n < 4; n++) {
                                            cornerCards[1].rotateRight();
                                            for (let o = 0; o < 4; o++) {
                                                cornerCards[2].rotateRight();
                                                for (let p = 0; p < 4; p++) {
                                                    cornerCards[3].rotateRight();
                                                    if (matchEdge(cornerCards[0].right, centerCards[1].left) && matchEdge(cornerCards[0].bottom, centerCards[4].top) &&
                                                        matchEdge(cornerCards[1].left, centerCards[1].right) && matchEdge(cornerCards[1].bottom, centerCards[2].top) &&
                                                        matchEdge(cornerCards[2].right, centerCards[3].left) && matchEdge(cornerCards[2].top, centerCards[4].bottom) &&
                                                        matchEdge(cornerCards[3].left, centerCards[3].right) && matchEdge(cornerCards[3].top, centerCards[2].bottom)) {
                                                        this.results.push(JSON.stringify([cornerCards[0], centerCards[1], cornerCards[1], centerCards[4], centerCards[0], centerCards[2], cornerCards[2], centerCards[3], cornerCards[3]]));
                                                    }
                                                }
                                            }
                                        }
                                    }
                                });
                            }
                        }
                    }
                }
            }
        });
    }
}

export {ThreeByThreeBoardSolver};
