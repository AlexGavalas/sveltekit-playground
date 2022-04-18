import _ from 'lodash';

const RANKINGS = {
    royalFlush: 9,
    straightFlush: 8,
    fourOfAKind: 7,
    fullHouse: 6,
    flush: 5,
    straight: 4,
    threeOfAKind: 3,
    twoPair: 2,
    pair: 1,
    highCard: 0,
} as const;

const getPlayerRank = (hand: Card[]) => {
    hand.sort((a, b) => a.order - b.order);

    const isSameSuit = _.chain(hand).map('suit').uniq().value().length === 1;

    const isStraight =
        hand.reduce((prev, curr) => {
            if (!prev || curr.order - prev.order !== 1) return null;
            return curr;
        }) === _.last(hand);

    const isRoyalFlush =
        isSameSuit &&
        _.first(hand).suit === 'hearts' &&
        _.first(hand).rank === 10 &&
        _.last(hand).rank === 'a';

    const isStraightFlush = isStraight && isSameSuit;

    const isFourOfAKind = _.chain(hand).map('rank').uniq().value().length === 2;

    const threeOfAKind = _.chain(hand)
        .groupBy('rank')
        .mapValues((v) => v.length === 3)
        .findKey(Boolean)
        .value();

    const twoOfAKind = _.chain(hand)
        .groupBy('rank')
        .mapValues((v) => v.length === 2)
        .findKey(Boolean)
        .value();

    const twoPair = _.chain(hand)
        .groupBy('rank')
        .mapValues((v) => v.length === 2)
        .omitBy((v) => !v)
        .keys()
        .value();

    const hasTwoPair = twoPair.length === 2;

    const hasFullHouse = threeOfAKind && twoOfAKind;

    const hasFlush = isSameSuit;

    const hasStraight = isStraight;

    if (isRoyalFlush) return { ranking: RANKINGS.royalFlush };
    if (isStraightFlush) return { ranking: RANKINGS.straightFlush };
    if (isFourOfAKind) return { ranking: RANKINGS.fourOfAKind };
    if (hasFullHouse) return { ranking: RANKINGS.fullHouse };
    if (hasFlush) return { ranking: RANKINGS.flush };
    if (hasStraight) return { ranking: RANKINGS.straight };
    if (threeOfAKind) return { ranking: RANKINGS.threeOfAKind };
    if (hasTwoPair) return { ranking: RANKINGS.twoPair };
    if (twoOfAKind) return { ranking: RANKINGS.pair };
    return { ranking: RANKINGS.highCard };
};

export const calculateWinner = ({ player1, player2 }: { player1: Card[]; player2: Card[] }) => {
    const rank1 = getPlayerRank(player1);
    const rank2 = getPlayerRank(player2);

    if (rank1.ranking === rank2.ranking) {
        // TODO: Handle same ranking
    }

    return rank1.ranking > rank2.ranking ? 'Player 1' : 'Quantum AI';
};
