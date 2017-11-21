import { rows, row, empty, crud, rowsets } from "./base.proc";
import { SQL_GET } from "./base.proc";
import { pluralize } from "../middleware/utils.mw";

const MODEL_NAME = 'Follower';

const additional_getFollowers = (MODEL_NAME: string) => {
    return (...args: Array<any>) => {
        return rows(`${SQL_GET}${pluralize(MODEL_NAME)}`, args)
    };
};

const additionalProcedures = {
    getFollowers: additional_getFollowers(MODEL_NAME),
};

export const { create, destroy, getFollowers } = crud(MODEL_NAME, additionalProcedures);