// @ts-nocheck
import { blog } from '$db/collections'
import type {PageServerLoad} from './$types'

export const load = async function({ params }: Parameters<PageServerLoad>[0]): Promise<any>{
    const id = params.blogid
    const  data = await blog.findOne({title: id})
    const datas = await blog.find({},{limit:10}).toArray();

    return {
        blog: structuredClone(data),
        blogs: structuredClone(datas)
    }

}