import { blog } from '$db/collections'
import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async function({ params }): Promise<any>{
    const id = params.blogid
    const  data = await blog.findOne({title: id})
    const datas = await blog.find({},{limit:10}).toArray();
    console.log(data)
    return {
        blog: structuredClone(data),
        blogs: structuredClone(datas)
    }

}