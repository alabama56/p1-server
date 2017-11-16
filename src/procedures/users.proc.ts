import { rows, row, empty } from "./base.proc";


const all = () => {
    return rows("spGetUsers");
};

const read = (id: number) => {
    return row("spGetUser", [id]);
};

const destroy = (id: number) => {
    return empty("spDeleteUser", [id]);
};

const create = (name: string, username: string, email: string, password: string, age: number, tagline: string, pro_img: string, background_img: string) => {
    return row("spInsertUser", [name, username, email, password, age, tagline, pro_img, background_img]);
};

const update = (id: number, name: string, username: string, email: string, password: string, age: number, tagline: string, pro_img: string, background_img: string) => {
    return empty("spUpdateUser", [id, name, username, email, password, age, tagline, pro_img, background_img]);
}

export default {
    all,
    read,
    destroy,
    create,
    update
};


