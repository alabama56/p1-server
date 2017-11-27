import { rows, row, empty, crud, rowsets } from "./base.proc";
import { SQL_GET } from "./base.proc";
import { pluralize } from "../middleware/utils.mw";

const MODEL_NAME = 'Follower';

export const getFollowers = (...args: Array<any>) => {
    return rows(`${SQL_GET}${pluralize(MODEL_NAME)}`, args)
};

export const { create, destroy } = crud(MODEL_NAME);