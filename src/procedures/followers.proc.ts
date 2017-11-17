import { rows, row, empty, crud } from "./base.proc";

const MODEL_NAME = 'Follower';

export const { create, destroy } = crud(MODEL_NAME);