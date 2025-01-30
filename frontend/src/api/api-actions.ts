export async function getCategories(url: string) {
    const res = await fetch(url).then(respuesta => respuesta.json());

    return res.categories ?? res.drinks;
};
