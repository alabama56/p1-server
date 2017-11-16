import { rows, row, empty } from "./base.proc";


const create = (follower_id: number, following_id: number) => {
    return empty ('spInsertFollower', [follower_id, following_id])
}

const destroy = (follower_id: number, following_id: number) => {
    return empty ('spDeleteFollower', [follower_id, following_id])
}

export default {
    create,
    destroy
}