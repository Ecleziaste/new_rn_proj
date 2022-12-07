# Это относится к действию пользователя, представляющему бизнес-ценность

Например, пользователь (viewer)
Фичи, завязанные на текущем пользователе

- Использует в реализации бизнес-сущности (зачастую - entities/viewer) и shared ресурсы
- Фичи могут не быть напрямую связаны с вьювером, но при этом могут использовать его контекст при реализации логики

```
# Сегменты могут быть как файлами, так и директориями
|
├── features/auth                # Layer: Бизнес-фичи
|        |                       #    Slice Group: Структурная группа "Авторизация пользователя"
|        ├── by-phone/           #      Slice: Фича "Авторизация по телефону"
|        |     ├── ui/           #         Segment: UI-логика (компоненты)
|        |     ├── lib/          #         Segment: Инфраструктурная-логика (helpers/utils)
|        |     ├── model/        #         Segment: Бизнес-логика
|        |     └── index.ts      #         [Декларация Public API]
|        |
|        ├── by-oauth/           #      Slice: Фича "Авторизация по внешнему ресурсу"
|   ...
```