import { rows, row, empty, crud } from "./base.proc";

const MODEL_NAME = 'Follower';

export const { create, destroy, all } = crud(MODEL_NAME);