// @ts-nocheck
import { shop } from '$db/collections'
import type {PageServerLoad} from './$types'

export const load = async function(): Promise<any>{
    const  data = await shop.find({}).toArray();

    return {
        shop: structuredClone(data)
    }

};null as any as PageServerLoad;