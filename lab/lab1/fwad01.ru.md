# Лабораторная работа №1. Основы Symfony

Данная лабораторная работа знакомит студента с основами бэкенд фреймворков, используя в качестве примера создание небольшого `ToDo` приложения.

## Условие
### Подготовка среды

1. Установить Symfony с помощью Composer следуя официальной документации ([Установить Composer](https://getcomposer.org/))

### Маршрутизация и контроллеры

1. Создать класс-контроллер с методами, для обработки соответствующих запросов:
    1. `list`: просмотр списка задач
    2. `view`: просмотр одной задачи
    3. `create`: создание задачи
    4. `update`: редактирование существующей задачи
    5. `delete`: удаление задачи

### Создание сущностей

1. Создать сущности **"Task"** и **"Category"**
    1. Создать сущность **Category**, представляющую категорию задачи.
    2. Добавить следующие свойства (поля) к сущности **Category**:
        1. `id`: уникальный идентификатор категории
        2. `name`: название категории
    3. Создать сущность **Task**, представляющую задачую
    4. Добавить следующие свойства (поля) к сущности Task:
        1. `id`: уникальный идентификатор задачи 
        2. `title`: заголовок задачи.
        3. `description`: описание задачи.
        4. `dueDate`: срок выполнения задачи.
        5. `createdAt`: дата и время создания задачи (заполняется автоматически)
    5. Определить связь между сущностями `Task` и `Category`. Одной задачи может соответсовать одна категория, одной категории может соотвествовать множество задач.

### Работа с шаблонами и данными

1. Создать представления с использованием шаблонизатора Twig для каждой страницы приложения 'ToDo'.
    1. Страница: список задач
    2. Страница: просмотр одной задачи
    3. Страница: создание задачи и редактирование задачи
2. Для страницы списка задач (list) отобразить данные всех задач, включая заголовок, срок выполнения и категорию.
    1. _Примечание_: для оценки 10 необходимо сделать пагинацию.
3. Для страницы одной задачи отобразить полное описание задачи.

### Обработка и сохранение данных из формы

1. Создать соответсвующую форму для создания и редактирования задачи.
2. Обработать отправку данных из формы, провести валидацию и сохранить данные в базу данных.
    1. Мин. длина названия: **4** символов.
    2. Макс. длина названия: **20** символов.
3. Реализовать удаление задачи.

## Отчет

Предоставьте отчёт о проделанной работе и загрузите отчет на мудл.

Загрузите работу на git (при желании можно использовать [gitlab.usm.md](https://gitlab.usm.md))

В отчете должны быть отображены следующие аспекты:

1. Введение (не более 5-х предложений)
2. Описание цели и основные этапы работы.
3. Краткое описание особенностей реализации. Не нужно описывать каждый Ваш шаг, а написать лишь некоторые более интересные особенности реализации того или инного механизма.
4. Вывод и ссылка на git
5. Ответы на контрольные вопросы
6. Список использованных источников

## Контрольные вопросы

1. Какие есть преимущества использования фреймворка Symfony
2. Какие есть способы определения маршртутов в Symfony
3. Какая связь между таблицами баз данных была использована и как именно это было реализовано?
4. Что такое миграции базы данных, и как они применяются в Symfony?