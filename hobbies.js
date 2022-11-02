const hobbies = ["jogging","cooking","diving","swimming","reading"];

exports.getHobbies = () => {
    return hobbies;
}

exports.getHobby = id => {
    if(id<1 || id > hobbies.length)
        return null;
    return hobbies[id-1];
}

exports.getHobbyStartingWith = letter => {
    return hobbies.filter(hobby => hobby.startsWith(letter));
}

exports.getHobbyByLength = length => {
    return hobbies.filter(hobby => hobby.length == length);
}

//test if commit makes build fail