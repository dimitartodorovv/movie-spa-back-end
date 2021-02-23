const movies = require("../mongooseSchema/movie");

async function addMovie(data,id) {
    
    data.creator = id;
    
    const movie =  await new movies(data);
        
    return   movie.save()
};

async function getAllMovie() {

        const movie = await movies.find().lean();
        
        return movie
};

async function getMovie(id) {

    const movie = await movies.findOne({_id: id});

        return movie
};

async function editMovie(id, data) {

     const upMovie = await  movies.updateOne({_id: id}, data)

     return upMovie
};

async function deleteMovie(id) {

    const movie = await movies.findByIdAndDelete({_id: id});

    return movie
};

async function likeMovie(idMovie,idUser) {

    const movie = await movies.findById({_id: idMovie})

    movie.userLiked.push(idUser)

    return await movie.save();
}

module.exports = {
    addMovie,
    getAllMovie,
    getMovie,
    editMovie,
    deleteMovie,
    likeMovie
}