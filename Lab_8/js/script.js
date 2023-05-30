(function () {
    let names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

    let bye = speakBye();
    let hello = speakHello();

    console.log("Сортування імен за першою літерою.(Якщо перша літера J or j)");
    for (let i = 0; i < names.length; i++) {
        const item = names[i];
        if (item.charAt(0) === "J" || item.toLowerCase().charAt(0) === "j") {
            bye(item);
        } else {
            hello(item);
        }
    }


   console.log(`Сортування імен з кількістю голосних більше або дорівнює ${2}.`);
names.forEach(item => {
    const vowelCount = countVowels(item);
    if (vowelCount >= 2) {
        bye(item);
    } else {
        hello(item);
    }
});

function countVowels(name) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < name.length; i++) {
        if (vowels.includes(name[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}
}());
