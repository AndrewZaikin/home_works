const bDay = +prompt("Ваш рік народження");
const yourCity = prompt("Місто де Ви мешкаете");
const favoriteSport = prompt("Який ваш улюблений вид спорту?");

let message = '';
if (bDay) {
   message += `Ваш возраст ${2023 - bDay}\n`;
}
else {
   message += `Шкода, що Ви не захотіли ввести свій(ю) дату`;
}



switch (yourCity) {
   case 'Київ': {
      message += `Ти живеш у столиці України\n`;
      break;
   }
   case 'Вашингтон': {
      message += `Ти живеш у столиці США\n`;
      break;
   }
   case 'Лондон': {
      message += `Ти живеш у столиці Великої Британії\n`;
      break;
   }
   case null: {
      message += `Шкода, що Ви не захотіли ввести свій(ю) місто`;
      break;
   }
   default: {
      message += `Ти живеш у місті ` + yourCity;
   }
}

switch (favoriteSport) {
   case 'Теніс': {
      message += `Круто! Хочеш стати як Новак Джокович?\n`;
      break;
   }
   case 'Гонки': {
      message += `Круто! Хочеш стати як Михаэль Шумахер?\n`;
      break;
   }
   case 'Бокс': {
      message += `Круто! Хочеш стати як Александр Усик?\n`;
      break;
   }
   case null: {
      message += `Шкода, що Ви не захотіли ввести свій(ю) спорт`
      break;
   }
   default: {
      message += `Круто!`;
   }
}
alert(message);