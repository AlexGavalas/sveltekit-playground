export type Task = {
    uid: string;
    text: string;
    created_at: Date;
    done: boolean;
    pending_delete?: boolean;
};

export type Suit = 'spades' | 'hearts' | 'clubs' | 'diams';

export type Card = {
    suit: Suit;
    rank: string | number;
    order: number;
};
