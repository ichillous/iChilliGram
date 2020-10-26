import api from './api-config'

export const getAllTags = async () => {
    const resp = await api.get('/tags')

    return resp.data
}