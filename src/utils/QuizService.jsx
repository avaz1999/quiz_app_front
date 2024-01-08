import axios from "axios";

export const api = axios.create({
    baseURL: "https://localhost:8080/queston"
})

export const createQuestion = async (quizQuestion) =>{
    try {
        const response = await api.post(quizQuestion)
        return response.data
    }catch (error){
        console.error(error)
    }
}

export const getAllQuestions = async () => {
    try {
        const response = await api.get(`?categoryName=${categoryName}`)
        return response.data
    }catch (error){
        console.error(error)
        return []
    }
}