# Это относится непосредственно к бизнес-сущности

Например, пользователь (viewer)
Бизнес-сущность пользователя

- Представляет собой наиболее атомарную абстракцию для проектирования
- Здесь формируется контекст авторизации, на который потом обычно полагаются все вышележащие слои приложения

```
# Сегменты могут быть как файлами, так и директориями
|
├── entities/viewer              # Layer: Бизнес-сущности
|         |                      #     Slice: Текущий пользователь
|         ├── ui/                #      Segment: UI-логика (компоненты)
|         ├── lib/               #      Segment: Инфраструктурная-логика (helpers/utils)
|         ├── model/             #      Segment: Бизнес-логика
|         └── index.ts           #      [Декларация Public API]
|   ...
```
