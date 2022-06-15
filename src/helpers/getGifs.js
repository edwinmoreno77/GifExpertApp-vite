




export const getGifs = async (cat) => {


    const url = `https://api.giphy.com/v1/gifs/search?api_key=r4dyUY0kSk3BPz4M2MYdZcnP98WbS6qg&limit=10&q=${cat}`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    // console.log(gifs);
    return gifs;

}
