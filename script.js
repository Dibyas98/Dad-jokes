let btn = document.querySelector('.btn')
let joke = document.querySelector('.jokes');
let ani=document.querySelector('.lod');
// console.log(btn,joke);

const apiKey = "GCtwFIHgMAy8CKEoiajg64TfNYp4acq45DLiw3K0";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getcontent() {
    try {
        joke.classList.remove('smiley');
        ani.classList.add('loader');
        joke.innerText = 'updating...';
        
        btn.innerText = 'Loading';
        btn.disabled = true;

        const res = await fetch(apiURL, options);
        let data = await res.json();
        console.log(data);

        btn.disabled = false;
        ani.classList.remove('loader');
        joke.classList.add('smiley');
        btn.innerText = 'Tell me Jokes';
        joke.innerText = data[0].joke;
    }
    catch (error) {
        ani.classList.remove('loader');
        joke.innerText='';
        joke.classList.add('error-message')
        btn.disabled = false;
        btn.innerText = "Tell me a joke";

        console.log(error);
    }
}
btn.addEventListener('click', getcontent);