import type { RequestHandler } from '@sveltejs/kit';
import data from './pokemon.json';

export const get: RequestHandler = async (request) => {
  const { searchParams } = request.url;
  const name = searchParams.get('name')?.toLowerCase();

  const pokemon = data.filter((p) => p.name?.toLowerCase()?.startsWith(name));

  return {
    body: {
      pokemon,
    },
  };
};
