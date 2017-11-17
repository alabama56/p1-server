import { rows, row, empty, crud } from "./base.proc";

const MODEL_NAME = 'User';

export default MODEL_NAME;

export const { all, create, read, update, destroy } = crud(MODEL_NAME);

