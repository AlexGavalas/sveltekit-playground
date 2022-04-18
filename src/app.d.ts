/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#the-app-namespace
// for information about these interfaces
declare namespace App {
    interface Locals {
        userid: string;
    }

    interface Params {
        hasUser: boolean;
    }
}

type Task = {
    uid: string;
    text: string;
    created_at: Date;
    done: boolean;
    pending_delete?: boolean;
};

type Suit = 'spades' | 'hearts' | 'clubs' | 'diams';

type Card = {
    suit: Suit;
    rank: string | number;
    order: number;
};
