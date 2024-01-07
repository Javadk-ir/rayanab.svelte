// @ts-nocheck
import { blog } from '$db/collections'
import type {PageServerLoad} from './$types'

export const load = async function(): Promise<any>{
    const  data = await blog.find({}).toArray();

    return {
        blog: structuredClone(data)
    }

};null as any as PageServerLoad;