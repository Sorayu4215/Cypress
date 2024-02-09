const fs = require('fs')
let items = require('../../data/json-data/items.json')
const { join } = require('path')

const getItems = (request, response) => {

    let newData = getbase64Images(items)
    if (newData) {
        return response.status(200).json(newData)
    } else {
        return response.status(500).json({ msg: 'Something went wrong!' })
    }
}

const getItem = (request, response) => {
    const id = request.params.id
    let data = items.filter((item) => item.idItems == id)
    data = getbase64Images(data)    

    if (data) {
        return response.status(200).json(data)
    } else {
        return response.status(500).json({ msg: 'Something went wrong!' })
    }
}

const getbase64Images = (array)=>{
    return array.map(item => {
        image = fs.readFileSync(join(process.cwd(), 'data', 'images', item.image))
        base64Image = Buffer.from(image).toString('base64');
        return {
            ...item, // Copy all properties of item
            image: 'data:image/jpeg;base64,' + base64Image // Update only the image property
        };
    })
}

module.exports = { getItems, getItem, getbase64Images }