const basePath = './hog-imgs/'

export default function fetchImage(hogName) {
    //Appends the base url with the lower cased hog name.
    //Also replaces any spaces with underscores.
    const path = basePath + hogName.toLowerCase().replace(/\s/g, '_') + '.jpg'
    return path
}