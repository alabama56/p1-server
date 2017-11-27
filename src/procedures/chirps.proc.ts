import { rows, row, empty, rowsets, crud } from "./base.proc";
import { BY, ALL, SQL_GET } from "./base.proc";
import { pluralize } from "../middleware/utils.mw";
import USER_MODEL_NAME from "./users.proc";

let MODEL_NAME = 'Chirp';

export const getFollowing = (...args: Array<any>) => {
    return rows(`${SQL_GET}Following${pluralize(MODEL_NAME)}`, args)
};

export const getByUser = (...args: Array<any>) => {
    return rowsets(`${SQL_GET}${pluralize(MODEL_NAME)}${BY}${USER_MODEL_NAME}`, args)
};

export const { all, create, read, update, destroy } = crud(MODEL_NAME);