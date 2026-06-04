export const login = async (credentials) => {
	try {
		const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
			method: 'POST',
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
