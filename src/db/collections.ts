import db from '$db/mongo'

export const blog = db.collection('blogs')
export const shop = db.collection('mahsolats')
