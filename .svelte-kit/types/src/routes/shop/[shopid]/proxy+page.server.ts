// @ts-nocheck
import { shop } from '$db/collections'
import type {PageServerLoad} from './$types'

export const load = async function({ params }: Parameters<PageServerLoad>[0]): Promise<any>{
    const id = params.shopid
    let  data = await shop.findOne({title: id})
    if (!data){ return data }
    const datas = await shop.find({category: data.category},{limit:4}).toArray();

    return {
        shop: structuredClone(data),
        shops: structuredClone(datas)
    }

}