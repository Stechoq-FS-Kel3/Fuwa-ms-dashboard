import { axiosInstance } from '@/axios'

export const fetchPost = async () => {
  try {
    const response = await axiosInstance.get('https://jsonplaceholder.typicode.com/posts')
    return response.data
  } catch (err) {
    console.error(err.toString())
    throw err
  }
}

export const createPost = async (postData) => {
  try {
    const response = await axiosInstance.post(
      'https://jsonplaceholder.typicode.com/posts',
      postData
    )
    return response.data
  } catch (err) {
    console.error(err.toString())
    throw err
  }
}
