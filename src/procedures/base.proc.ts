import { procedure } from '../config/db/index';
import { pluralize } from "../middleware/utils.mw";

export const prefix = "sp";
export const SQL_GET = `${prefix}Get`;
export const SQL_INSERT = `${prefix}Insert`;
export const SQL_UPDATE = `${prefix}Update`;
export const SQL_DELETE = `${prefix}Delete`;


export const BY = 'By';
export const ALL = 'all';
export const CREATE = 'create';
export const READ = 'read';
export const UPDATE = 'update';
export const DESTROY = 'destroy';


export const rows = (procedureName: string, args: Array<any> = []) => {
    return procedure(procedureName, args)
        .then((rows) => {
            return rows[0];
        });
};

export const row = (procedureName: string, args: Array<any> = []) => {
    return procedure(procedureName, args)
        .then((row) => {
            return row[0][0];
        });
};

export const empty = (procedureName: string, args: Array<any> = []) => {
    return procedure(procedureName, args)
        .then(() => {
            return;
        });
};

export const rowsets = (procedureName: string, args: Array<any> = []): Promise<Array<Array<any>>> => {
    return procedure(procedureName, args);
};


const all = (MODEL_NAME: string): () => Promise<Array<any>> => {
    return (...args: Array<any>): Promise<Array<any>> => {
        return rows(`${SQL_GET}${MODEL_NAME}`, args);
    };
};

const read = (MODEL_NAME: string) => {
    return (...args: Array<any>) => {
        return row(`${SQL_GET}${MODEL_NAME}`, args);
    };
};

const destroy = (MODEL_NAME: string) => {
    return (...args: Array<any>) => {
        return empty(`${SQL_DELETE}${MODEL_NAME}`, args);
    };
};

const create = (MODEL_NAME: string) => {
    return (...args: Array<any>) => {
        return row(`${SQL_INSERT}${MODEL_NAME}`, args);
    };
};

const update = (MODEL_NAME: string) => {
    return (...args: Array<any>) => {
        return empty(`${SQL_UPDATE}${MODEL_NAME}`, args);
    };
};


export const crud = (MODEL_NAME: string, additionalProcedures?: any) => {
    return {
        all: all(pluralize(MODEL_NAME)),
        create: create(MODEL_NAME),
        read: read(MODEL_NAME),
        update: update(MODEL_NAME),
        destroy: destroy(MODEL_NAME),
        ...additionalProcedures

    }
};