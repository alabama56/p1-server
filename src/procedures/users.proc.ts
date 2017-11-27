import { rows, row, empty, crud } from "./base.proc";
import { BY, ALL, SQL_GET, EMAIL } from "./base.proc"

const MODEL_NAME = 'User';

export default MODEL_NAME;

export const getUserByEmail = (...args: Array<any>) => {
    return row(`${SQL_GET}${MODEL_NAME}${BY}${EMAIL}`, args);
};

export const { all, create, read, update, destroy } = crud(MODEL_NAME);

