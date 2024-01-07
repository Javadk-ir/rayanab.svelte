import { blog } from '$db/collections'
import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async function(): Promise<any>{
    const  data = await blog.find({}).toArray();

    return {
        blog: structuredClone(data)
    }

}