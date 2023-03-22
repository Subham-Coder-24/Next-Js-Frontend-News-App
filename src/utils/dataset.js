export default function getData(id) {
    const postData = [
        {
            id: 1,
            name: "Business",
        },
        {
            id: 2,
            name: "Entertainment",
        },
        {
            id: 3,
            name: "General",
        },
        {
            id: 4,
            name: "Health",
        },
        {
            id: 5,
            name: "Science",
        },
        {
            id: 6,
            name: "Sports",
        },
        {
            id: 7,
            name: "Technology",
        }
    ];
    if (id) {
        return postData.filter(post => post.id == id)
    }
    return postData
}