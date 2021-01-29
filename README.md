# Тестовое задание
## Заметка для проверяющего:
На данный момент удалось замаскировать компоненты SmokeText и Image. В консоль выводится лишь 'item was found 2', объект срабатывания которого находится вне маскируемого компонента SmokeText.
Для маскировки компонента Image были использованы styled-components. В компоненте SmokeText используется замена символов кириллицы на похожие латинские, а также добавляются невидимые пробелы в случайные позиции строки.
К сожалению, мне не удалось выполнить пункт 3. Из-за отсутствия опыта работы с TS и малыми знаниями о конфигурировании проектов, я столкнулся с рядом ошибок, решение которых приводило к новым неполадкам.
Выдаваемые ошибки:

     SyntaxError: /home/yosh/Документы/work/TestTasks/trainee-test-1/trainee-test-1/src/components/base/SmokeText.test.tsx: Support for the experimental syntax  'jsx' isn't currently enabled (7:43):
     
     Add @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.
    If you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.

Пробовал конфигурировать babel, jest, ts. Устанавливал модули ts-jest. Привело к новым ошибкам:

    TypeError: Cannot read property 'create' of undefined

    error TS2741: Property 'children' is missing in type '{}' but required in type '{ children: any; }'.
    
Спасибо за интересное тестовое задание. Буду рад обратной связи.
    

#### Запуск приложения:
 - npm install
 - npm start (запустится Storybook)

## ТЗ:

#### Общая цель:
Замаскировать html-фрагмент, чтобы его нельзя было идентифицировать с помощью XPath или регулярных выражений (поэтому классы у элементов генерируются динамически при каждой отрисовки). 

#### Нужно сделать:
 1. Обновить компонент **src/components/base/Image.tsx** таким образом, чтобы он отрисовывал изображение с помощью тега div (с class="..."), а не img;
 2. Обновить компонент **src/components/base/SmokeText.tsx** таким образом, чтобы он динамически маскировал выдаваемую строку (обезопасить от возможности найти блок с помощью XPath или регулярного выражения при следующей перерисовки);
 3. Написать тесты на алгоритм, который реализует функциональность в **src/components/base/SmokeText.tsx**;

Примеры XPath и регулярных выражений, от которых необходимо защититься, можно увидеть в **.storybook/components/RenderComponent.tsx**.
