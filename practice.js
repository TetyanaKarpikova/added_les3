// // Взяти файл template_2.html та працювати в ньому
// // - Напишіть код, який :
// // 1-- змінює колір тексту елемнту з ід main_header на будь-який інший
// let  elem_main = document.getElementById('main_header');
// elem_main.style.color = 'rgb(5, 97, 5)';

// // 2-- робить шириниу елементу ul 400 пікселів
// let elem_ul = document.getElementsByTagName('ul');
// for (let val of elem_ul){
//     val.style.width = '400px'
// }


// // 3-- робить шириниу всіх елементів з класом linkList шириною 50%
// let elem_link = document.getElementsByClassName('linkList');
// for (let val_link of elem_link){
//     val_link.style.width = '50%'
// }

// // 4-- отримує текст який зберігається в елементі з класом listElement2
// let elem2 = document.getElementsByClassName('listElement2');
// for (let val of elem2){
//     console.log(val.textContent);
// }


// //5 -- отримує всі елементи li та змінює ім колір фону на сірий
// let elem_li = document.getElementsByTagName('li');
// for (let val_li of elem_li){
//     val_li.style.backgroundColor = 'grey';
// }

// // 6-- отримує всі елементи 'a' та додає їм клас anchor
// let elem_a = document.getElementsByTagName('a');
// for (let val_a of elem_a){
//     val_a.classList.add('anchor');
// }


// // 7 -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let elem_a2 = document.getElementsByTagName('a');
// for (let val_a of elem_a2){
//     if (val_a.textContent === 'link3'){
//         val_a.style.fontSize = '40px';
//     }
// }



// 8 -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let elem_a3 = document.getElementsByTagName('a');
// for (let val of elem_a3){
//     val.classList.add('element_' + val.textContent);
// }


// 9 -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let elem_header = document.getElementsByClassName('sub-header');
// let txt_color = prompt('Введіть колір фону:')
// for (let value of elem_header){
//     value.style.backgroundColor = txt_color;
// }


// 10 -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let elem_header2 = document.getElementsByClassName('sub-header');
// let str_color = prompt('Введіть колір:');

// for (let col of elem_header2){
//     if (col.textContent === 'content 2 segment'){
//         col.style.color = str_color;

//     }
// }


// 11 -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let elem_content1 = document.getElementsByClassName('content_1');
// let str_input = prompt('Введіть текст який відображатиметься на сторінці:');
// for (let val of elem_content1){
//     val.innerText = str_input;
// }


// 12  -- отримати елементи p та змінити їм paddin на довільне значення
// let elem_p = document.getElementsByTagName('p');
// for (let val_p of elem_p){
//     val_p.style.padding = '15px';
// }
// 13 -- отримати елементи з класом text2 та змінити їм текст на довільне значення
// let elem_text2 = document.getElementsByClassName('text2');
// for(let val_text of elem_text2){
//     val_text.innerText = 'arum nostrum excepturi tempora eligendi dolor optio itaque, earum ullam cupiditate deleniti in totam. Voluptatibus facere earum facilis. Officia vitae tempora molestiae?'
// }


