const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export default async function api(endpoint: string, method = 'GET', body?: {}) {
	const response = await fetch(`${BASE_URL}/${endpoint}`, {
		method,
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${localStorage.getItem('token')}`
		},
		body: JSON.stringify(body)
	});

	if (!response.ok) {
		console.error(`Failed to fetch ${endpoint}: ${response.statusText}`);
	}
	let data = null;
	if (response.statusText != 'No Content') {
		data = await response.json();
	}
	return { data, status: response.status };
}
