const API_URL = process.env.CLOUD_API_URL;
const API_KEY = process.env.CLOUD_API_KEY;

export async function fetchCloudData() {
  try {
    const response = await fetch(`${API_URL}/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(API_KEY && {
          Authorization: `Bearer ${API_KEY}`,
        }),
      },
      signal: AbortSignal.timeout(15000),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Cloud API request failed:", error.message);
    throw error;
  }
}

export async function createCloudRecord(data) {
  const response = await fetch(`${API_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(API_KEY && {
        Authorization: `Bearer ${API_KEY}`,
      }),
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Failed to create record: ${response.status}`);
  }

  return response.json();
}