import { rows, row, empty, rowsets, crud } from "./base.proc";
import { BY, ALL, SQL_GET } from "./base.proc"
import { pluralize } from "../middleware/utils.mw";
import USER_MODEL_NAME from "./users.proc"

let MODEL_NAME = 'Chirp';

const additional_GetFollowing = (MODEL_NAME: string) => {
    return (...args: Array<any>) => {
        return rows(`${SQL_GET}Following${MODEL_NAME}`, args)
    };
};

const additional_GetByUser = (MODEL_NAME: string) => {
    return (...args: Array<any>) => {
        return rows(`${SQL_GET}${MODEL_NAME}s${BY}${USER_MODEL_NAME}`, args)
    };
};


const additionalProcedures = {
    GetFollowing: additional_GetFollowing(pluralize(MODEL_NAME)),
    GetByUser: additional_GetByUser(MODEL_NAME)
};

export const { all, create, read, update, destroy, GetFollowing, GetByUser } = crud(MODEL_NAME, additionalProcedures);