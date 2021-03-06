var groupmates = [
    {
        "name": "Андрей",
        "group": "БВТ1702",
        "age": 20,
        "marks": [5, 5, 5, 5, 5]
    },
    {
        "name": "Евгений",
        "group": "БВТ1702",
        "age": 18,
        "marks": [4, 4, 5, 5, 4]
    },
    {
        "name": "Кирилл",
        "group": "БВТ1702",
        "age": 19,
        "marks": [3, 5, 4, 3, 5]
    },
    {
        "name": "Илья",
        "group": "БВТ1702",
        "age": 23,
        "marks": [3, 3, 4, 3, 5]
    },
    {
        "name": "Кристина",
        "group": "БВТ1701",
        "age": 19,
        "marks": [3, 3, 4, 3, 5]
    },
    {
        "name": "Павел",
        "group": "БВТ1701",
        "age": 19,
        "marks": [5, 3, 4, 3, 2]
    }
];

var rpad = function (str, length) {
    // js не поддерживает добавление нужного количества символов
    // справа от строки то есть аналога ljust из языка Python здесь нет
    str = str.toString(); // преобразование в строку
    while (str.length < length)
        str = str + ' '; // добавление пробела в конец строки
    return str; // когда все пробелы добавлены, возвратить строку
};

var filterByGroup = function (group, students) {
    var filteredStudents = [];
    for (var i = 0; i <= students.length - 1; i++) {
        if (students[i]['group'] === group) {
            filteredStudents.push(students[i])
        }
    }
    return printStudents(filteredStudents)
};

var printStudents = function (students) {
    console.log(
        rpad("Имя студента", 15),
        rpad("Группа", 8),
        rpad("Возраст", 8),
        rpad("Оценки", 20)
    );
    // был выведен заголовок таблицы
    for (var i = 0; i <= students.length - 1; i++) {
        // в цикле выводится каждый экземпляр студента
        console.log(
            rpad(students[i]['name'], 15),
            rpad(students[i]['group'], 8),
            rpad(students[i]['age'], 8),
            rpad(students[i]['marks'], 20)
        );
    }
    console.log('\n'); // добавляется пустая строка в конце вывода
};
printStudents(groupmates);