**Paralogs** - утилита для удобного чтения логов сервера. Есть поиск по никам и серийникам, отчеты античита. Проект еще на стадии разработки.

Текущий стек:

- Angular v7.2.0
- Bootstrap v4.1.0
- LESS
- Electron v4.0.0
- Electron Builder v20.28.1

Вы можете клонировать репозиторий, чтобы собрать билд под Mac, Windows или Linux.

##Подготовка

Чтобы слить содержимое репозитория себе:
```sh
git clone git://github.com/neverm1ndo/paralogs.git
```
Чтобы установить пакеты, нужные для работы:
```sh
npm install
```
##Сборка

| OS | Команда |
| --- | --- |
| Windows | `npm run electron:windows` |
| Linux | `npm run electron:linux` |
| MAC | `npm run electron:mac` |
