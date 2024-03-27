export const getData = async (endpoint, options = {
    method: 'GET'
}) => {
    try{
        const {$base_url} = useNuxtApp();
        options.headers = header();
        const url = $base_url+endpoint/*+"?api-version=3.0&to%5B0%5D=bn&textType=plain&profanityAction=NoAction"*/;

        const data =   await $fetch(url, options);
        console.log(data)
        return data;
    }
    catch (error){
        console.log('erro',error)
    }
}

const header = () => {
    return {
        'content-type' : "application/json",
        'X-RapidAPI-Key' : '9adaac54aemsh8b2b5bbcd177f55p125cdfjsnc7df1c02dd6f',
        'X-RapidAPI-Host' : 'microsoft-translator-text.p.rapidapi.com'
    }
}

export const translate =  async (translate_to, text) =>  {
    const url = `/translate?api-version=3.0&to%5B0%5D=${translate_to ?? 'en'}&textType=plain&profanityAction=NoAction`;
    return await getData(url, {
        method: 'POST',
        body: [
            {Text: text}
        ]
    })
}