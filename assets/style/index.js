

// ЗАДАНИЕ 14 недели. 
//1 Создайте пустой массив с именем `grades` и заполните массив случайными оценками от 1 до 100 для 12 студентов. Для генерации случайных оценок, используйте функцию `Math.random()`.
const grades = [];
for (let i=0; i < 12; i++){
    grades.push(Math.floor(Math.random()*100) +1);
};

// 2. Рассчитайте и выведите средний балл студентов, используя методы массивов.

//const grades = [75, 92, 85, 60, 78, 95, 88, 72, 68, 90, 84, 79];
const sumOfGrades = grades.reduce((sum, grade) => sum + grade, 0); // Рассчитываем сумму оценок
const averageGrade = sumOfGrades / grades.length;// Рассчитываем средний балл

console.log(`Средний балл студентов: ${averageGrade}`);// Выводим результат в консоль

// 3. Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива.

const maxGrade = Math.max(...grades);
console.log(maxGrade);

// 4. Найдите и выведите минимальный балл среди студентов, используя соответствующий метод массива.
const minGrade = Math.min(...grades);
console.log(minGrade);

// 5. Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60). Используйте метод массива, который фильтрует оценки и оставляет только те, которые соответствуют заданному условию. Затем посчитайте количество оставшихся оценок и выведите результат.
const passGrade = () => {
    const positiveGrades = grades.filter(grade => grade >= 60);
    const countPositiveGrades = positiveGrades.length;

    console.log(countPositiveGrades);
};

// 6. Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60). Используйте аналогичный подход, как в предыдущем шаге.
const failGrade = () => {
    const negativeGrades = grades.filter(grade => grade < 60);
    const countNegativeGrades = negativeGrades.length;

    console.log(countNegativeGrades);
}

// 7. Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E, используя следующие правила:
    //- Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"
    //- Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"
    //- Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"
    //- Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"
    //- Если оценка ниже 20, преобразуйте её в "E"
    //Выведите все найденные значения на экран.
    const convertToLetterGrade = (numericGrade) => {
        if (numericGrade >= 80 && numericGrade <= 100) {
            return "A";
        } else if (numericGrade >= 60 && numericGrade < 79) {
            return "B";
        } else if (numericGrade >= 40 && numericGrade < 59) {
            return "C";
        } else if (numericGrade >= 30 && numericGrade < 39) {
            return "D";
        } else if (numericGrade >= 0 && numericGrade < 20) {
            return "E";
        } else {
            return "Invalid Grade";
        }
    };
const numericGrade ='95'; 
const letterGrade = convertToLetterGrade(numericGrade);
console.log(`Числовая оценка: ${numericGrade}, Буквенная оценка: ${letterGrade}`);



//код выводящий результаты ( не смогла остановить генерацию новых ответов при повторном клике)
function showResults() {
    const studentsList = document.getElementById('students');
    const infoParagraph = document.getElementById('info');
    const resultParagraph = document.getElementById('result');

    const passingGrade = 60;
    let resultList = [];

    for (let i = 0; i < studentsList.children.length; i++) {
        const student = studentsList.children[i];
        const grade = parseInt(student.getAttribute('data-grade'), 10);

        if (grade > passingGrade) {
            resultList.push(student.textContent);
        }
        //return - чтобы остановить функицю не работает
    }
}

document.querySelector('.results').addEventListener('click', function () {
    const studentsList = document.getElementById('students');
    const resultParagraph = document.getElementById('result');

    for (let i = 0; i < studentsList.children.length; i++) {

        const studentName = studentsList.children[i].textContent.trim();
        const numericGrade = grades.push(Math.floor(Math.random()*100) +1);
        const letterGrade = convertToLetterGrade(numericGrade);
        const resultString = `${studentName}: Числовая оценка - ${numericGrade}, Буквенная оценка - ${letterGrade}`;
        

        resultParagraph.innerHTML += `<p>${resultString}</p>`;
    }
});