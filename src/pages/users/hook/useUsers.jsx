import { useMutation, useQuery } from 'react-query';
import axios from 'axios';

const useUsers = () => {
    const getUsers = async () => {
        const response = await axios.get(`${process.env.REACT_APP_HOST}/users`);
        const data = await response.data;
        console.log('[DEBUG] data: ', data);
        return data;
    };

    return useQuery(['users'], getUsers);
};

export const useUserMutation = () => {
    const mutation = useMutation({
        mutationFn: (data) => {
            const { id } = data;
            return axios.patch(`${process.env.REACT_APP_HOST}/users/${id}`, data);
        }
        // onSuccess: (data, variables) => {
        // console.log('[DEBUG]: Success mutated.', data, variables);
        // }
    });
    return mutation;
};

export default useUsers;
