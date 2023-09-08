function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    const tabs = document.querySelectorAll(tabsSelector), // получение псевдомассива - текста справа.
        tabsContent = document.querySelectorAll(tabsContentSelector), // получение картинок как псевдомассив.
        tabsParent = document.querySelector(tabsParentSelector); // получение родителя tabs, в виде html - структуры.(Блок Текста)

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide'); // добавляем кажому элементу display: none;(hide)
            item.classList.remove('show', 'fade'); // убираем с кажого элемента display: block(show) и анимацию(fade) 
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass); // убираем данный класс у каждого текста
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade'); // добавляем два класса display: block(show) и анимацию(fade) к 1 эл
        tabsContent[i].classList.remove('hide'); // убираем display: none;(hide), делая элемент видимым.
        tabs[i].classList.add(activeClass); // добавляем активный класс тексту справа
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target; // определяем на каком тексте внутри tabsParent произошло событие

        console.log(target);
        if (target && target.classList.contains(tabsSelector.slice(1))) { // Проверка на правильность элемента
            tabs.forEach((item, i) => { // перебираем псевдомассив получая его элементы и
                if (target == item) { // сравнивая каждый элемент, c тем элементом который мы получили при событии. т.e при event.target
                    hideTabContent();
                    showTabContent(i); // получаем порядковый номер элемента который равен target-(у). Получается если условие if выполнилось мы останавливаемся на правильном элементе.
                }
            });
        }
    });
}

export default tabs;