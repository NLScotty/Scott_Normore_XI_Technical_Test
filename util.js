// heap's algorithm for generating permuations, taken from stackoverflow
// more on heap's algorithm here: https://en.m.wikipedia.org/wiki/Heap%27s_algorithm
function hPermute(permutation) {
    var length = permutation.length, result = [permutation.slice()], c = new Array(length).fill(0), i = 1, k, p;

    while (i < length) {
        if (c[i] < i) {
            k = i % 2 && c[i];
            p = permutation[i];
            permutation[i] = permutation[k];
            permutation[k] = p;
            ++c[i];
            i = 1;
            result.push(permutation.slice());
        } else {
            c[i] = 0;
            ++i;
        }
    }
    return result;
}
//a subset generation algorith I pulled from a stack overflow post. Makes use of javascript array functions.
function lSubset(array, length) {
    return array.flatMap((v, i) => length > 1
        ? lSubset(array.slice(i + 1), length - 1).map(w => [v, ...w])
        : [[v]]
    );
}
//used to compare two edges to see if they are a fit
function matchEdge(edge1, edge2) {
    if (edge1.substring(0, 1) == edge2.substring(0, 1) && edge1.substring(1, 2) != edge2.substring(1, 2)) {
        return true;
    } else {
        return false;
    }
}

export {hPermute,lSubset,matchEdge};