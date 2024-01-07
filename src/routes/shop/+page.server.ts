import { shop } from '$db/collections'
import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async function(): Promise<any>{
    const  data = await shop.find({}).toArray();

    return {
        shop: structuredClone(data)
    }

}