export const handleRegister = async (userData) => {
    console.log('Registering user:', userData);

        try {

            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                
                body: JSON.stringify(userData),
            });
            
            const data = await response.json();
            
            if (!data.success) {
                throw new Error(data?.message);
            }
            return data;
        } catch (error) {
            console.error('Error during registration:', error);
            throw new Error(error.message || "Something went wrong during registration. Please try again.");
        }
}

