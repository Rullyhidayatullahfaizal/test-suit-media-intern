import axios from 'axios';

export async function GET(req) {
  const url = new URL(req.url);
  const page = url.searchParams.get('page[number]');
  const size = url.searchParams.get('page[size]');
  const sort = url.searchParams.get('sort');
  
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}`, {
      params: {
        'page[number]': page || 1,
        'page[size]': size || 10,
        'append[]': ['small_image', 'medium_image'],
        sort: sort || '-published_at',
      },
    });

    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    console.error('Error fetching data:', error);
    return new Response(JSON.stringify({ message: 'Error fetching data' }), { status: 500 });
  }
}
