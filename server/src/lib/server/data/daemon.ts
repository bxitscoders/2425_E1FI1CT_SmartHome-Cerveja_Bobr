import type { daemon } from "$lib/server/s_types"


export const createDaemon = async (db : any, daemon : daemon) => {
    return await db.insert(daemon);    
}

export const removeDaemon = async (db : any, daemon_id : string) => {
    if (!daemon_id) return false;

    return await db.remove(daemon_id);
}

export const findDaemon = async (db : any, daemon_id : string) : Promise<daemon | null> => {

    if (!daemon_id) return null;
	return await db.findOne(daemon_id);
}

export const listDaemon = async (db : any) : Promise<daemon[]> => {
    return await db.find({});
}