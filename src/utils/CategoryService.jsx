import axios, {post} from "axios";

export const api = axios.create({
    baseURL: "https://localhost:8080/category"
})

export const AddCategory = async (category) => {
    try {
        const response = await api.post('', category)
        if (response.data) {
            return response.data
        } else throw new Error("Category not found")
    } catch (error) {
        console.error(error)
    }
}

export const updateCategory = async (id, question) =>{
    try {
        const  response = await api.put(`/${id}`,question)
        return response.data
    }catch (e) {
        console.error(e)
    }
}

export const getCategoryById = async (id) =>{
    try {
        const response = await api.get(`${id}`)
        return response.data
    }catch (e){
        console.error(e)
    }
}

export const deleteCategory = async(id) =>{
    try {
        const response = await api.delete(`${id}`)
        return response.data
    }catch (e){
        console.error(e)
    }
}