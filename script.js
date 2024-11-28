
const form = document.getElementById('inputForm');
const outputDiv = document.getElementById('output');
const errorDiv = document.getElementById('error');

// Обработчик отправки формы
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Отменить стандартное поведение отправки формы

    // Получение значений полей
    const height = document.getElementById('height').value.trim();
    const legs = document.getElementById('legs').value.trim();
    const material = document.getElementById('material').value.trim();

    // Очистка сообщений об ошибках
    errorDiv.innerHTML = '';
    let hasError = false;

    // Проверки
    let validHeight = parseInt(height, 10);
    if (!height || isNaN(validHeight)) {
        errorDiv.innerHTML += `<p>Высота должна быть числом от 20 до 60 см.</p>`;
        hasError = true;
    } else {
        validHeight = Math.min(Math.max(validHeight, 20), 60);
    }

    let validLegs = parseInt(legs, 10);
    if (!legs || isNaN(validLegs) || (validLegs !== 1 && validLegs !== 3 && validLegs !== 4)) {
        errorDiv.innerHTML += `<p>Количество ножек должно быть 1, 3 или 4.</p>`;
        hasError = true;
    }

    if (!material || (material !== 'металл' && material !== 'дерево' && material !== 'пластик')) {
        errorDiv.innerHTML += `<p>Материал должен быть: металл, дерево или пластик.</p>`;
        hasError = true;
    }


    if (hasError) {
        outputDiv.innerHTML = '';
        return;
    }

    outputDiv.innerHTML = `
        <h2>Результат:</h2>
        <p>Высота: ${validHeight} см</p>
        <p>Количество ножек: ${validLegs}</p>
        <p>Материал: ${material}</p>
    `;
});
