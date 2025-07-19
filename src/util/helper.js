import axios from 'axios'

const URL = "http://localhost:8000"
// const URL = "https://alert-backend-36e300f4f952.herokuapp.com"

const postApi = (Url, data = {}, success = (f) => f, error = (f) => f, empty = (f) => f) => {
    const baseUrl = URL + Url
    axios({
        method: 'post',
        url: baseUrl,
        data: data
    }).then((response) => {
        if (response) {
            success(response)
        } else {
            console.log('Empty response')
            empty()
        }
    }).catch((err) => {
        console.log(err, "error from helper")
        error(err)
    })
}

const getApi = (Url, success = (f) => f, error = (f) => f, empty = (f) => f) => {
    const baseUrl = URL + Url
    axios.get(baseUrl).then((response) => {
        if (response) {
            success(response)
        } else {
            console.log("Get successfull but empty")
            empty()
        }
    }).catch((err) => {
        error(err)
    })
}

export { postApi, getApi, URL }