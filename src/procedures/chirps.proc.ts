import { rows, row, empty, rowsets } from "./base.proc";


const all = () => {
    return rows("spGetChirps");
};

const allByUser = (id: number) => {
    return rowsets("spGetChirpsByUser", [id]);
};

const allByFollower = (userid: number) => {
    return rows("spGetFollowingChirps", [userid]);
}

const read = (id: number) => {
    return row("spGetChirp", [id]);
};

const destroy = (id: number) => {
    return empty("spDeleteChirp", [id]);
};

const create = (userid: number, message: string, img: string) => {
    return row("spInsertChirp", [userid, message, img]);
};

const update = (id: number, userid: number, message: string, img: string) => {
    return empty("spUpdateChirp", [id, userid, message, img]);
};

export default {
    all,                
    read,
    destroy,
    create,
    update,
    allByUser, 
    allByFollower
};

// p_user_id INT,
// p_message VARCHAR(280),
// p_img VARCHAR(280)