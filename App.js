
const charCounts = document.getElementById('charCounts');
const wordCounts = document.getElementById('wordCounts');
const myWords = document.getElementById('myWords');
const btns = document.getElementById('btns');
const clear = document.querySelector('.clear')
const copy = document.querySelector('copy')

const Count = () => {

    
const store = myWords.value

    const CharCount = (e) => {
        e=store;
        let text =e.split(" ").length-1;
        let Char = store.length-text;
        charCounts.innerHTML = Char;
    }

    const WordCount=(str)=>{

        str=store;
        let text =str.split(" ").length;

       wordCounts.innerHTML=text
    }

    CharCount();
    WordCount();
    
}


// btns.addEventListener('click', Count);

const clr =()=>{
myWords.value = location.reload()
Count();
}



clear.addEventListener('click', clr)


