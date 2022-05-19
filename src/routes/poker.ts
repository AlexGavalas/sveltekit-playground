import _ from 'lodash';
import type { RequestHandler } from '@sveltejs/kit';
import type { Suit } from '$lib/types';

const ranks = [...Array.from({ length: 9 }, (_, i) => i + 2), 'j', 'q', 'k', 'a'];
const suits: Suit[] = ['spades', 'hearts', 'clubs', 'diams'];

export const get: RequestHandler = async () => {
    const fullDeck = _.shuffle(
        suits.flatMap((suit) => {
            return ranks.map((rank, order) => ({ suit, rank, order }));
        }),
    );

    const [player1, player2] = _.chunk(_.take(fullDeck, 10), 5);

    const deck = fullDeck.slice(10);

    return {
        body: {
            deck,
            player1,
            player2,
        },
    };
};
