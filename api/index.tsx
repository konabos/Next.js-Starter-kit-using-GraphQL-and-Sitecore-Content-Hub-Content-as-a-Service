export async function fetchGraphQL(query: any, preview): Promise<any> {
  let apiKey = process.env.DELIVERY_API_KEY;
  let endpointUrl = process.env.DELIVERY_ENDPOINT_URL;
  if (preview) {
    apiKey = process.env.PREVIEW_API_KEY;
    endpointUrl = process.env.PREVIEW_ENDPOINT_URL;
  }

  try {
    const result = await fetch(endpointUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-GQL-Token': apiKey,
      },
      body: JSON.stringify({ query }),
    }).then((response: any) => response.json());
    return result;
  } catch (error) {
    return console.log(error);
  }
}
