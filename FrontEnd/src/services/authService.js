export const login = async (credentials) => {
	try {
		const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
			method: 'POST',
			credentials: 'include', // Include cookies for session management
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(credentials),
		});

		// Try to parse JSON, but handle non-JSON gracefully
		let data;
		try {
			data = await res.json();
			console.log('Login response data:', data);

		} catch (err) {
			throw new Error('Invalid response from server');
		}

		// Backend uses a `success` field in the JSON response
		if (!data?.success) {
			throw new Error(data?.message || 'Login failed');
		}

	

		// Print token as requested

		return data;
	} catch (error) {
		console.error('Login error:', error);
		throw error;
	}
}

export const checkLoginStatus = async () => {
	try {
		const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/checkAuth`, {
			method: 'GET',
			credentials: 'include', // Include cookies for session management
		});
		const data = await  res.json();
		if(data?.success){	
			return data; // Return user data if logged in
		} else {
			return null; // Not logged in
		}

	} catch (error) {
		console.error('Error checking login status:', error);
		throw error;
	}
}

