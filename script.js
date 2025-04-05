
const textChangeTime = document.querySelector('.time p');
const submitBtnTime = document.querySelector('.container-time button');
const textChangeUserName = document.querySelector('.user-name p');
const submitBtnUserName = document.querySelector('.container-name button');

const fetchTime = async ()=> {
    try {
        const response = await fetch(`http://localhost:3005/time`);
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
        return json.mess;
    } catch (error) {
        console.error("Ошибка:", error);
    }
}

const fetchUserName = async (name)=> {
    try {

        const response = await fetch(`http://localhost:3005/hello-user/${name}`);

        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }


        const json = await response.json();
        console.log(json.mess);
        return json.mess;


    } catch (error) {
        console.error("Ошибка:", error);
    }
}

submitBtnUserName.addEventListener('click', async (e) => {
    e.preventDefault();
    const valueInp = document.querySelector('input');
    valueInp.value === ""?alert("you dont write your name") :
    textChangeUserName.innerHTML = await fetchUserName(valueInp.value);
})

submitBtnTime.addEventListener('click', async (e) => {
    e.preventDefault();
    textChangeTime.innerHTML = await fetchTime();
})

